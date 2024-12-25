import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { repositoryService } from '../services/repository';
import type { Repository } from '../types/repository';

export function useRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = async () => {
    try {
      setIsLoading(true);
      const data = await repositoryService.getAll();
      setRepositories(data);
    } catch (error) {
      toast.error('Failed to fetch repositories');
    } finally {
      setIsLoading(false);
    }
  };

  const addRepository = async (repository: Omit<Repository, 'id'>) => {
    try {
      const newRepo = await repositoryService.create(repository);
      setRepositories(prev => [...prev, newRepo]);
      toast.success('Repository added successfully');
    } catch (error) {
      toast.error('Failed to add repository');
    }
  };

  const deleteRepository = async (id: number) => {
    try {
      await repositoryService.delete(id);
      setRepositories(prev => prev.filter(repo => repo.id !== id));
      toast.success('Repository deleted successfully');
    } catch (error) {
      toast.error('Failed to delete repository');
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repositories,
    isLoading,
    addRepository,
    deleteRepository,
    refreshRepositories: fetchRepositories
  };
}