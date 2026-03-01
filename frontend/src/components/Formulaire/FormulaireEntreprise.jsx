import { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function FormulaireEntreprise({ isOpen, onClose, onSubmit }) {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    email: '',
    domaine: ''
  });
  const [erreur, setErreur] = useState('');

  const gererChangement = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
    setErreur('');
  };

  const gererSoumission = (e) => {
    e.preventDefault();

    // Validation
    if (!formulaire.nom.trim()) {
      setErreur('Le nom de l\'entreprise est requis');
      return;
    }

    if (!formulaire.email.trim()) {
      setErreur('L\'email est requis');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulaire.email)) {
      setErreur('Veuillez entrer un email valide');
      return;
    }

    if (!formulaire.domaine.trim()) {
      setErreur('Le domaine est requis');
      return;
    }

    // Appeler le callback avec les données
    onSubmit(formulaire);

    // Réinitialiser le formulaire
    setFormulaire({ nom: '', email: '', domaine: '' });
  };

  const gererAnnulation = () => {
    setFormulaire({ nom: '', email: '', domaine: '' });
    setErreur('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Ajouter une entreprise</h2>
          <button
            onClick={gererAnnulation}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Erreur */}
        {erreur && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-700 text-sm font-medium">{erreur}</p>
          </motion.div>
        )}

        {/* Formulaire */}
        <form onSubmit={gererSoumission} className="space-y-4">
          {/* Nom Entreprise */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nom de l'entreprise
            </label>
            <input
              type="text"
              name="nom"
              value={formulaire.nom}
              onChange={gererChangement}
              placeholder="ex: TechCorp"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formulaire.email}
              onChange={gererChangement}
              placeholder="ex: contact@techcorp.com"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>

          {/* Domaine */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Domaine d'activité
            </label>
            <select
              name="domaine"
              value={formulaire.domaine}
              onChange={gererChangement}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition"
            >
              <option value="">-- Sélectionner un domaine --</option>
              <option value="Informatique">Informatique</option>
              <option value="Finance">Finance</option>
              <option value="Energie">Énergie</option>
              <option value="Vente">Vente</option>
              <option value="Consulting">Consulting</option>
              <option value="Santé">Santé</option>
              <option value="Éducation">Éducation</option>
              <option value="Agro-alimentaire">Agro-alimentaire</option>
              <option value="Autres">Autres</option>
            </select>
          </div>

          {/* Boutons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={gererAnnulation}
              className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-lg shadow-indigo-600/30"
            >
              Créer
            </button>
          </div>
        </form>

        {/* Infos */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Les informations seront enregistrées dans notre base de données
        </p>
      </motion.div>
    </div>
  );
}
