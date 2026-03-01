import { motion } from 'framer-motion';
import { PaperAirplaneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Messagerie() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      nom: 'TechCorp RH',
      derierMsg: 'Nous avons une place disponible pour...',
      heure: '14:32',
      nonLus: 3,
      avatar: '🏢'
    },
    {
      id: 2,
      nom: 'Jean Dupont',
      derierMsg: 'Merci pour l\'opportunité !',
      heure: '12:15',
      nonLus: 0,
      avatar: '👤'
    },
    {
      id: 3,
      nom: 'Support Administratif',
      derierMsg: 'Votre dossier a été approuvé',
      heure: '09:20',
      nonLus: 1,
      avatar: '📋'
    },
    {
      id: 4,
      nom: 'FinanceHub',
      derierMsg: 'Début du stage prévu pour...',
      heure: 'hier',
      nonLus: 0,
      avatar: '💼'
    }
  ];

  const messages = [
    { id: 1, auteur: 'TechCorp RH', contenu: 'Bonjour, nous avons une opportunité', type: 'entrant', heure: '14:30' },
    { id: 2, auteur: 'Vous', contenu: 'Merci pour cette opportunité', type: 'sortant', heure: '14:32' },
    { id: 3, auteur: 'TechCorp RH', contenu: 'Pouvez-vous nous envoyer votre CV ?', type: 'entrant', heure: '14:35' }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Messagerie</h1>
        <p className="text-gray-600 mb-8">Discussions et communications</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden h-[600px] flex"
      >
        {/* Lista de chats */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-50"
              />
            </div>
          </div>

          {/* Chats List */}
          <div className="overflow-y-auto flex-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition ${
                  selectedChat === chat.id ? 'bg-indigo-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{chat.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900 truncate">{chat.nom}</h3>
                      <span className="text-xs text-gray-500">{chat.heure}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate mt-1">{chat.derierMsg}</p>
                  </div>
                  {chat.nonLus > 0 && (
                    <div className="bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {chat.nonLus}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-900">{chats.find(c => c.id === selectedChat).nom}</h2>
            <p className="text-sm text-gray-500">En ligne</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'sortant' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'sortant'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{msg.contenu}</p>
                  <p className={`text-xs mt-1 ${msg.type === 'sortant' ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {msg.heure}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrire un message..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-50"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
