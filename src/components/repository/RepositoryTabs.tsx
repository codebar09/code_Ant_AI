import React from 'react';
import { Code } from 'lucide-react';

interface RepositoryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function RepositoryTabs({ activeTab, onTabChange }: RepositoryTabsProps) {
  return (
    <div className="border-b bg-gray-50 p-4">
      <div className="flex space-x-4">
        <button 
          onClick={() => onTabChange('code')}
          className={`flex items-center space-x-1 ${activeTab === 'code' ? 'font-medium' : 'text-gray-600'}`}
        >
          <Code className="h-4 w-4" />
          <span>Code</span>
        </button>
        <button 
          onClick={() => onTabChange('issues')}
          className={`flex items-center space-x-1 ${activeTab === 'issues' ? 'font-medium' : 'text-gray-600'}`}
        >
          <span>Issues</span>
        </button>
        <button 
          onClick={() => onTabChange('pulls')}
          className={`flex items-center space-x-1 ${activeTab === 'pulls' ? 'font-medium' : 'text-gray-600'}`}
        >
          <span>Pull requests</span>
        </button>
      </div>
    </div>
  );
}