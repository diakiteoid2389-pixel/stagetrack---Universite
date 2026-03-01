import { motion } from 'framer-motion';
import { PieChart as PieChartIcon, BarChart3, TrendingUpIcon } from 'lucide-react';

export default function Analyse() {
  const analyses = [
    {
      id: 1,
      titre: 'Taux de placement',
      valeur: '87.5%',
      description: 'Des étudiants ont trouvé un stage',
      icone: TrendingUpIcon,
      couleur: 'from-green-400 to-green-600'
    },
    {
      id: 2,
      titre: 'Secteurs les plus actifs',
      valeur: '12',
      description: 'Secteurs représentés',
      icone: PieChartIcon,
      couleur: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      titre: 'Durée moyenne de stage',
      valeur: '5.2',
      description: 'mois',
      icone: BarChart3,
      couleur: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Analyse & Statistiques</h1>
        <p className="text-gray-600 mb-8">Vue d'ensemble des performances et tendances</p>
      </motion.div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {analyses.map((analyse, index) => {
          const Icon = analyse.icone;
          return (
            <motion.div
              key={analyse.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${analyse.couleur} rounded-xl shadow-lg p-6 text-white`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-white/90">{analyse.titre}</h3>
                <Icon className="h-6 w-6 text-white/50" />
              </div>
              <p className="text-3xl font-bold mb-2">{analyse.valeur}</p>
              <p className="text-white/80 text-sm">{analyse.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Distribution par secteur */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Distribution par secteur</h2>
          <div className="space-y-3">
            {[
              { secteur: 'Informatique', pct: 35, color: 'bg-blue-500' },
              { secteur: 'Finance', pct: 20, color: 'bg-green-500' },
              { secteur: 'Vente', pct: 15, color: 'bg-yellow-500' },
              { secteur: 'Autres', pct: 30, color: 'bg-purple-500' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">{item.secteur}</span>
                  <span className="text-gray-600">{item.pct}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Évolution temporelle */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Stagiaires par mois</h2>
          <div className="space-y-3">
            {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'].map((mois, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">{mois}</span>
                  <span className="text-gray-600">{20 + idx * 5}</span>
                </div>
                <div className="w-full bg-indigo-100 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${(20 + idx * 5) * 2}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
