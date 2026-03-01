import { motion } from 'framer-motion';
import { AcademicCapIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Etudiant() {
  const etudiants = [
    {
      id: 1,
      nom: 'Jean Dupont',
      email: 'jean.dupont@univ.edu',
      programme: 'Informatique',
      stage: 'En cours',
      entreprise: 'TechCorp'
    },
    {
      id: 2,
      nom: 'Marie Martin',
      email: 'marie.martin@univ.edu',
      programme: 'Gestion',
      stage: 'Complété',
      entreprise: 'FinanceHub'
    },
    {
      id: 3,
      nom: 'Pierre Durand',
      email: 'pierre.durand@univ.edu',
      programme: 'Informatique',
      stage: 'En attente',
      entreprise: '-'
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion des Étudiants</h1>
        <p className="text-gray-600 mb-8">Liste et suivi des stagiaires</p>
      </motion.div>

      {/* Header with Add Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-between items-center mb-6"
      >
        <div>
          <p className="text-gray-600">Total: <span className="font-bold text-lg">{etudiants.length}</span> étudiants</p>
        </div>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
          + Ajouter un étudiant
        </button>
      </motion.div>

      {/* Students Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Programme</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Entreprise</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Statut</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {etudiants.map((etudiant) => {
                const statusColors = {
                  'En cours': 'bg-blue-100 text-blue-800',
                  'Complété': 'bg-green-100 text-green-800',
                  'En attente': 'bg-yellow-100 text-yellow-800'
                };
                return (
                  <tr key={etudiant.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{etudiant.nom}</td>
                    <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                      <EnvelopeIcon className="h-4 w-4" />
                      {etudiant.email}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{etudiant.programme}</td>
                    <td className="px-6 py-4 text-gray-600">{etudiant.entreprise}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[etudiant.stage]}`}>
                        {etudiant.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                        Voir détails
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
