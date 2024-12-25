import React from 'react';
import { motion } from 'framer-motion';

interface FileItem {
  id: number;
  name: string;
  type: string;
  size: string;
  visibility: string;
  updatedAt: string;
}

interface FileListProps {
  files: FileItem[];
}

export function FileList({ files }: FileListProps) {
  return (
    <div className="space-y-4">
      {files.map((file, index) => (
        <motion.div
          key={file.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full" 
              style={{ 
                backgroundColor: 
                  file.type === 'React' ? '#61dafb' : 
                  file.type === 'Javascript' ? '#f7df1e' : 
                  file.type === 'Python' ? '#3776ab' : '#6b7280'
              }} 
            />
            <div>
              <h3 className="font-medium text-gray-900">{file.name}</h3>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-gray-500">{file.type}</span>
                <span className="text-sm text-gray-500">{file.size}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  file.visibility === 'Public' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {file.visibility}
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-500">Updated {file.updatedAt}</span>
        </motion.div>
      ))}
    </div>
  );
}