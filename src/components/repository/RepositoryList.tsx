import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import type { Repository } from '../../types/repository';

interface RepositoryListProps {
  repositories: Repository[];
  onDelete: (id: number) => void;
}

export function RepositoryList({ repositories, onDelete }: RepositoryListProps) {
  return (
    <div className="space-y-4">
      {repositories.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div 
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  repo.type === 'React' ? '#61dafb' :
                  repo.type === 'Javascript' ? '#f7df1e' :
                  repo.type === 'Python' ? '#3776ab' : '#6b7280'
              }}
            />
            <div>
              <h3 className="font-medium text-gray-900">{repo.name}</h3>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-gray-500">{repo.type}</span>
                <span className="text-sm text-gray-500">{repo.size}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  repo.visibility === 'Public' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {repo.visibility}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Updated {repo.updatedAt}</span>
            <button
              onClick={() => onDelete(repo.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}