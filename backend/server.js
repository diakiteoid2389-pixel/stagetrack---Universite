require('dotenv').config();
console.log("=== DEBUG VARIABLES ENVIRONNEMENT ===");
console.log("DB_HOST     →", process.env.DB_HOST);
console.log("DB_USER     →", process.env.DB_USER);
console.log("DB_PASSWORD →", process.env.DB_PASSWORD ? "(défini)" : "(vide)");
console.log("DB_NAME     →", process.env.DB_NAME);
console.log("PORT        →", process.env.PORT);
console.log("=====================================");
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Autorise les requêtes du frontend (ajoutez origins spécifiques en prod)
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('Backend StageTrack est en ligne !');
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});