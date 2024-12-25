import React, { useState } from 'react';
import { RefreshCw, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { RepositoryList } from './RepositoryList';
import { AddRepositoryModal } from './AddRepositoryModal';
import { useRepositories } from '../../hooks/useRepositories';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function RepositoryView() {
  const { repositories, isLoading, addRepository, deleteRepository, refreshRepositories } = useRepositories();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Repositories</h1>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                onClick={refreshRepositories}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh All
              </Button>
              <Button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Repository
              </Button>
            </div>
          </div>

          <Input
            type="text"
            placeholder="Search Repositories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <RefreshCw className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : (
            <RepositoryList
              repositories={filteredRepositories}
              onDelete={deleteRepository}
            />
          )}
        </div>
      </div>

      {showAddModal && (
        <AddRepositoryModal
          onClose={() => setShowAddModal(false)}
          onAdd={addRepository}
        />
      )}
    </div>
  );
}