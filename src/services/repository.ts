import { api } from './api';
import type { Repository } from '../types/repository';

export const repositoryService = {
  async getAll() {
    const { data } = await api.get<Repository[]>('/repositories');
    return data;
  },

  async create(repository: Omit<Repository, 'id'>) {
    const { data } = await api.post<Repository>('/repositories', repository);
    return data;
  },

  async delete(id: number) {
    await api.delete(`/repositories/${id}`);
  }
};