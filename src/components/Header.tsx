import React from 'react';
import { Github, Menu } from 'lucide-react';

interface HeaderProps {
  onLogout?: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden hover:text-primary-200 transition-colors" />
            <Github className="h-8 w-8 hover:text-primary-200 transition-colors" />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="hidden md:block bg-primary-800/50 border border-primary-600 rounded-md px-3 py-1.5 text-sm 
                focus:outline-none focus:border-primary-400 w-64 placeholder-primary-300
                transition-all duration-200 hover:bg-primary-800/70"
            />
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-primary-200 transition-colors hidden md:block">Pull requests</a>
            <a href="#" className="text-sm hover:text-primary-200 transition-colors hidden md:block">Issues</a>
            <a href="#" className="text-sm hover:text-primary-200 transition-colors hidden md:block">Marketplace</a>
            <a href="#" className="text-sm hover:text-primary-200 transition-colors hidden md:block">Explore</a>
            {onLogout && (
              <button 
                onClick={onLogout}
                className="text-sm bg-primary-600 hover:bg-primary-500 px-3 py-1.5 rounded-md transition-colors"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}