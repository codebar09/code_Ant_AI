import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import type { Repository } from '../../types/repository';

interface AddRepositoryModalProps {
  onClose: () => void;
  onAdd: (repository: Omit<Repository, 'id'>) => void;
}

export function AddRepositoryModal({ onClose, onAdd }: AddRepositoryModalProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [visibility, setVisibility] = useState<Repository['visibility']>('Public');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      name,
      type,
      visibility,
      size: '0 KB',
      updatedAt: new Date().toLocaleDateString()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Repository</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Repository Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visibility
            </label>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value as Repository['visibility'])}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit">
              Add Repository
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}