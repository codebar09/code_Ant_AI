import React, { useState } from 'react';
import { Star, GitBranch } from 'lucide-react';

export function RepositoryActions() {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  const handleStar = () => {
    setStars(prev => prev + 1);
    alert('Repository starred!');
  };

  const handleFork = () => {
    setForks(prev => prev + 1);
    alert('Repository forked!');
  };

  return (
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
  );
}