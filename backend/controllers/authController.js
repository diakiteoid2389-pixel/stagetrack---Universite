const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
  try {
    const { email, password, role, extraField } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    // Créer l'utilisateur
    const userId = await User.create({ email, password, role, extraField });

    // Générer JWT pour connexion automatique
    const token = jwt.sign({ id: userId, role: role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Utilisateur créé avec succès', userId, token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role, extraField } = req.body;

    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifier rôle
    if (user.role !== role) {
      return res.status(400).json({ message: 'Rôle incorrect' });
    }

    // Vérifier champ extra (si fourni)
    if (extraField) {
      const fieldKey = role === 'etudiant' ? 'num_etudiant' :
                       role === 'universite' ? 'code_universite' : 'siret';
      if (user[fieldKey] !== extraField) {
        return res.status(400).json({ message: 'Champ supplémentaire incorrect' });
      }
    }

    // Vérifier mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Générer JWT
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

module.exports = { signup, login };