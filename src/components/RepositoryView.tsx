import React, { useState } from 'react';
import { Code, GitBranch, Star } from 'lucide-react';

export function RepositoryView() {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [activeTab, setActiveTab] = useState('code');

  const handleStar = () => {
    setStars(prev => prev + 1);
    alert('Repository starred!');
  };

  const handleFork = () => {
    setForks(prev => prev + 1);
    alert('Repository forked!');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div className="flex items-center space-x-2">
          <Code className="h-5 w-5" />
          <h1 className="text-xl font-semibold">
            <span className="text-gray-600">username</span>
            <span className="mx-1">/</span>
            <span>repository-name</span>
          </h1>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Public</span>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button 
            onClick={handleStar}
            className="flex items-center space-x-1 px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            <Star className="h-4 w-4" />
            <span>Star {stars > 0 && stars}</span>
          </button>
          <button 
            onClick={handleFork}
            className="flex items-center space-x-1 px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            <GitBranch className="h-4 w-4" />
            <span>Fork {forks > 0 && forks}</span>
          </button>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="border-b bg-gray-50 p-4">
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('code')}
              className={\`flex items-center space-x-1 \${activeTab === 'code' ? 'font-medium' : 'text-gray-600'}\`}
            >
              <Code className="h-4 w-4" />
              <span>Code</span>
            </button>
            <button 
              onClick={() => setActiveTab('issues')}
              className={\`flex items-center space-x-1 \${activeTab === 'issues' ? 'font-medium' : 'text-gray-600'}\`}
            >
              <span>Issues</span>
            </button>
            <button 
              onClick={() => setActiveTab('pulls')}
              className={\`flex items-center space-x-1 \${activeTab === 'pulls' ? 'font-medium' : 'text-gray-600'}\`}
            >
              <span>Pull requests</span>
            </button>
          </div>
        </div>

        <div className="p-4">
          {activeTab === 'code' && (
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-blue-600 hover:underline cursor-pointer">
                        File name {item}.tsx
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Updated 2 days ago
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">12KB</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'issues' && (
            <div className="text-center py-8 text-gray-600">
              No issues are currently open
            </div>
          )}
          {activeTab === 'pulls' && (
            <div className="text-center py-8 text-gray-600">
              No pull requests are currently open
            </div>
          )}
        </div>
      </div>
    </div>
  );
}