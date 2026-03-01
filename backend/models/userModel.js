const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = {};

// Créer un utilisateur (signup)
User.create = async (userData) => {
  const { email, password, role, extraField } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  let query = '';
  let values = [];

  switch (role) {
    case 'etudiant':
      query = 'INSERT INTO users (email, password, role, num_etudiant) VALUES (?, ?, ?, ?)';
      values = [email, hashedPassword, role, extraField];
      break;
    case 'universite':
      query = 'INSERT INTO users (email, password, role, code_universite) VALUES (?, ?, ?, ?)';
      values = [email, hashedPassword, role, extraField];
      break;
    case 'entreprise':
      query = 'INSERT INTO users (email, password, role, siret) VALUES (?, ?, ?, ?)';
      values = [email, hashedPassword, role, extraField];
      break;
    default:
      throw new Error('Rôle invalide');
  }

  const [result] = await db.execute(query, values);
  return result.insertId;
};

// Trouver un utilisateur par email
User.findByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

module.exports = User;