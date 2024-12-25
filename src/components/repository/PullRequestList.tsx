import React from 'react';
import { GitPullRequest, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface PullRequest {
  id: number;
  title: string;
  description: string;
  status: string;
  author: string;
  createdAt: string;
}

interface PullRequestListProps {
  pullRequests: PullRequest[];
}

export function PullRequestList({ pullRequests }: PullRequestListProps) {
  return (
    <div className="space-y-4">
      {pullRequests.map((pr, index) => (
        <motion.div
          key={pr.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <GitPullRequest className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-medium text-primary-800 hover:text-primary-600 cursor-pointer">
                  {pr.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{pr.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{pr.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(pr.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              {pr.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}