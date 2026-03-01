import { useState } from 'react';
import {
  HomeIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  DocumentTextIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import Accueil from './dashboard/Accueil';
import Etudiant from './dashboard/Etudiant';
import Analyse from './dashboard/Analyse';
import Entreprise from './dashboard/Entreprise';
import Messagerie from './dashboard/Messagerie';
import Notification from './dashboard/Notification';
import Publication from './dashboard/Publication';

const menuItems = [
  { id: 'accueil', label: 'Accueil', icon: HomeIcon },
  { id: 'etudiant', label: 'Étudiant', icon: AcademicCapIcon },
  { id: 'analyse', label: 'Analyse', icon: ChartBarIcon },
  { id: 'entreprise', label: 'Entreprise', icon: BriefcaseIcon },
  { id: 'messagerie', label: 'Messagerie', icon: ChatBubbleLeftIcon },
  { id: 'notification', label: 'Notification', icon: BellIcon },
  { id: 'publication', label: 'Publication', icon: DocumentTextIcon }
];

const components = {
  accueil: Accueil,
  etudiant: Etudiant,
  analyse: Analyse,
  entreprise: Entreprise,
  messagerie: Messagerie,
  notification: Notification,
  publication: Publication
};

export default function Dashboard({ userEmail, onLogout }) {
  const [activeTab, setActiveTab] = useState('accueil');

  const CurrentComponent = components[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Navbar Gauche */}
      <nav className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white shadow-lg flex flex-col">
        {/* Logo/Titre */}
        <div className="p-6 border-b border-indigo-700">
          <h1 className="text-2xl font-bold">StageTrack</h1>
          <p className="text-sm text-indigo-200 mt-1">Gestion des stages</p>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-indigo-600 shadow-lg shadow-indigo-600/50'
                      : 'hover:bg-indigo-700/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* User Info et Logout */}
        <div className="border-t border-indigo-700 p-4 space-y-3">
          <div className="bg-indigo-700/50 rounded-lg p-3">
            <p className="text-xs text-indigo-200">Connecté en tant que</p>
            <p className="text-sm font-medium truncate">{userEmail}</p>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors font-medium text-sm"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </nav>

      {/* Contenu Principal */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
}
