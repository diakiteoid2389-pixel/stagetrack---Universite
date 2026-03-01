CREATE DATABASE IF NOT EXISTS stagetrack_db;
USE stagetrack_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('etudiant', 'universite', 'entreprise') NOT NULL,
  num_etudiant VARCHAR(50) DEFAULT NULL,    -- Pour étudiants
  code_universite VARCHAR(50) DEFAULT NULL, -- Pour universités
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exemple de données test (optionnel, supprimez en prod)
INSERT INTO users (email, password, role, num_etudiant) VALUES 
('etudiant@test.com', '$2b$10$examplehashedpassword', 'etudiant', '2023001234');  -- Mot de passe haché pour 'password123'