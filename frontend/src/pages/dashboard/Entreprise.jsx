import { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, MapPinIcon, UsersIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import FormulaireEntreprise from '../../components/Formulaire/FormulaireEntreprise';

export default function Entreprise() {
  const [showFormulaire, setShowFormulaire] = useState(false);
  const [entreprises, setEntreprises] = useState([
    {
      id: 1,
      nom: 'TechCorp Guinée',
      secteur: 'Informatique',
      localisation: 'Conakry',
      stagiaires: 12,
      offresActives: 5,
      logo: '🏢'
    },
    {
      id: 2,
      nom: 'FinanceHub',
      secteur: 'Finance',
      localisation: 'Conakry',
      stagiaires: 8,
      offresActives: 3,
      logo: '💼'
    },
    {
      id: 3,
      nom: 'GreenEnergy',
      secteur: 'Énergie',
      localisation: 'Kindia',
      stagiaires: 5,
      offresActives: 2,
      logo: '⚡'
    },
    {
      id: 4,
      nom: 'ConsultPro',
      secteur: 'Consulting',
      localisation: 'Conakry',
      stagiaires: 10,
      offresActives: 4,
      logo: '📊'
    }
  ]);

  const getLogoEmoji = (domaine) => {
    const logos = {
      'Informatique': '🖥️',
      'Finance': '💰',
      'Énergie': '⚡',
      'Vente': '📈',
      'Consulting': '📊',
      'Santé': '🏥',
      'Éducation': '🎓',
      'Agro-alimentaire': '🌾',
      'Autres': '🏢'
    };
    return logos[domaine] || '🏢';
  };

  const gererAjoutEntreprise = (donnees) => {
    const nouvelleEntreprise = {
      id: entreprises.length + 1,
      nom: donnees.nom,
      secteur: donnees.domaine,
      localisation: 'À ajouter',
      stagiaires: 0,
      offresActives: 0,
      logo: getLogoEmoji(donnees.domaine)
    };

    setEntreprises([...entreprises, nouvelleEntreprise]);
    setShowFormulaire(false);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion des Entreprises</h1>
        <p className="text-gray-600 mb-8">Partenaires et offres de stage</p>
      </motion.div>

      {/* Add Enterprise Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <button 
          onClick={() => setShowFormulaire(true)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          + Ajouter une entreprise partenaire
        </button>
      </motion.div>

      {/* Enterprises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {entreprises.map((entreprise, index) => (
          <motion.div
            key={entreprise.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{entreprise.logo}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{entreprise.nom}</h3>
                  <p className="text-sm text-gray-600 mt-1">{entreprise.secteur}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPinIcon className="h-4 w-4" />
                <span className="text-sm">{entreprise.localisation}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <UsersIcon className="h-4 w-4" />
                <span className="text-sm">{entreprise.stagiaires} stagiaires actuels</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <BriefcaseIcon className="h-4 w-4" />
                <span className="text-sm">{entreprise.offresActives} offres actives</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-3 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium">
                Voir détails
              </button>
              <button className="flex-1 px-3 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
                Offres
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Formulaire Modal */}
      <FormulaireEntreprise 
        isOpen={showFormulaire}
        onClose={() => setShowFormulaire(false)}
        onSubmit={gererAjoutEntreprise}
      />
    </div>
  );
}
