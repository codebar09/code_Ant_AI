export interface Repository {
  id: number;
  name: string;
  type: string;
  size: string;
  visibility: 'Public' | 'Private';
  updatedAt: string;
}