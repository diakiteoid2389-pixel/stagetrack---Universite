import { motion } from 'framer-motion';
import { PlusIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Publication() {
  const publications = [
    {
      id: 1,
      auteur: 'TechCorp Guinée',
      titre: 'Offre de stage - Développeur Full Stack',
      description: 'Nous recherchons 3 développeurs Full Stack pour renforcer notre équipe. Durée: 4 mois. Salaire: à négocier.',
      secteur: 'Informatique',
      dateDebut: '2024-04-01',
      competences: ['React', 'Node.js', 'MongoDB'],
      likes: 24,
      comments: 8,
      avatar: '🏢',
      liked: false
    },
    {
      id: 2,
      auteur: 'FinanceHub',
      titre: 'Stage Analyste Financier',
      description: 'Rejoignez notre équipe d\'analyse financière. Vous travaillerez sur des projets réels et développerez vos compétences.',
      secteur: 'Finance',
      dateDebut: '2024-03-15',
      competences: ['Excel', 'Python', 'Finance'],
      likes: 18,
      comments: 5,
      avatar: '💼',
      liked: true
    },
    {
      id: 3,
      auteur: 'GreenEnergy',
      titre: 'Ingénieur Énergies Renouvelables',
      description: 'Stage d\'ingénieur pour contribuer à nos projets d\'énergies renouvelables. Environnement stimulant et formation continue.',
      secteur: 'Énergie',
      dateDebut: '2024-05-01',
      competences: ['Ingénierie', 'Énergie', 'Environnement'],
      likes: 15,
      comments: 3,
      avatar: '⚡',
      liked: false
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Publications</h1>
        <p className="text-gray-600 mb-8">Offres de stage et actualités</p>
      </motion.div>

      {/* New Publication Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium mb-8"
      >
        <PlusIcon className="h-5 w-5" />
        Publier une offre
      </motion.button>

      {/* Publications Feed */}
      <div className="space-y-6 max-w-2xl">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{pub.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{pub.auteur}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <CalendarIcon className="h-4 w-4" />
                      Début: {new Date(pub.dateDebut).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">⋮</button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{pub.titre}</h2>
              <p className="text-gray-600 mb-4">{pub.description}</p>

              {/* Secteur */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  {pub.secteur}
                </span>
              </div>

              {/* Competences */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Compétences requises:</h4>
                <div className="flex gap-2 flex-wrap">
                  {pub.competences.map((comp, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer - Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <HeartIcon className={`h-5 w-5 ${pub.liked ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>{pub.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span>{pub.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <ShareIcon className="h-5 w-5" />
                </button>
              </div>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm">
                Candidater
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
