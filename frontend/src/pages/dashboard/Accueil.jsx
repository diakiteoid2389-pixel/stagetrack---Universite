import { motion } from 'framer-motion';
import { UserGroupIcon, BriefcaseIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

export default function Accueil() {
  const stats = [
    {
      id: 1,
      label: 'Stagiaires',
      value: '248',
      icon: UserGroupIcon,
      color: 'bg-blue-500',
      bgLight: 'bg-blue-50'
    },
    {
      id: 2,
      label: 'Offres de stage',
      value: '45',
      icon: BriefcaseIcon,
      color: 'bg-green-500',
      bgLight: 'bg-green-50'
    },
    {
      id: 3,
      label: 'Placements réussis',
      value: '156',
      icon: DocumentCheckIcon,
      color: 'bg-purple-500',
      bgLight: 'bg-purple-50'
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Accueil</h1>
        <p className="text-gray-600 mb-8">Bienvenue sur le tableau de bord de gestion des stages</p>
      </motion.div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 font-medium">{stat.label}</h3>
                <div className={`${stat.bgLight} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 text-gray-700`} />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-green-600 mt-2">↑ 12% ce mois</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Activités récentes</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-indigo-600">AC</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Nouvelle demande de stage</p>
                <p className="text-sm text-gray-500">Il y a 2 heures</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
