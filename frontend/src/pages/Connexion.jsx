import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Connexion({ onConnected }) {
  const [formulaire, setFormulaire] = useState({
    email: '',
    motDePasse: ''
  });
  const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
  const [chargement, setChargement] = useState(false);

  const gererChangement = (e) => {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value });
  };

  const gererSoumission = (e) => {
    e.preventDefault();
    setChargement(true);

    // Simulation de connexion
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        email: formulaire.email,
        connecte: true
      }));
      setChargement(false);
      // Appeler le callback du parent pour passer au dashboard
      onConnected(formulaire.email);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-gray-950 to-black px-4">
      <div className="w-full max-w-md p-8 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-2xl shadow-black/40">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Connexion Université
        </h2>

        <form onSubmit={gererSoumission} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Adresse email institutionnelle
            </label>
            <input
              type="email"
              name="email"
              value={formulaire.email}
              onChange={gererChangement}
              className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              placeholder="exemple@univ-conakry.edu.gn"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Mot de passe
            </label>
            <input
              type={afficherMotDePasse ? 'text' : 'password'}
              name="motDePasse"
              value={formulaire.motDePasse}
              onChange={gererChangement}
              className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition pr-11"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setAfficherMotDePasse(!afficherMotDePasse)}
              className="absolute right-4 top-10 text-gray-400 hover:text-gray-200"
            >
              {afficherMotDePasse ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="text-right text-sm">
            <p className="text-gray-400">
              <span className="text-indigo-400 cursor-pointer hover:text-indigo-300">
                Mot de passe oublié ?
              </span>
            </p>
          </div>

          <button
            type="submit"
            disabled={chargement}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
          >
            {chargement ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}