import { useState, useEffect } from 'react';
import Connexion from './pages/connexion';
import Dashboard from './pages/Dashboard';

function App() {
  const [connecte, setConnecte] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserEmail(userData.email);
      setConnecte(true);
    }
  }, []);

  const handleConnected = (email) => {
    setUserEmail(email);
    setConnecte(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setConnecte(false);
    setUserEmail('');
  };

  return (
    <div className="min-h-screen">
      {connecte ? (
        <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      ) : (
        <Connexion onConnected={handleConnected} />
      )}
    </div>
  );
}

export default App;