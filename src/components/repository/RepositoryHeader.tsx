import React from 'react';
import { Code } from 'lucide-react';
import { RepositoryActions } from './RepositoryActions';

interface RepositoryHeaderProps {
  username: string;
  repoName: string;
  isPublic?: boolean;
}

export function RepositoryHeader({ username, repoName, isPublic = true }: RepositoryHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
      <div className="flex items-center space-x-2">
        <Code className="h-5 w-5" />
        <h1 className="text-xl font-semibold">
          <span className="text-gray-600">{username}</span>
          <span className="mx-1">/</span>
          <span>{repoName}</span>
        </h1>
        {isPublic && (
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Public</span>
        )}
      </div>
      <RepositoryActions />
    </div>
  );
}