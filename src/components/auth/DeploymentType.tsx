import React, { useState } from 'react';
import { motion } from 'framer-motion';

export type DeploymentTypeValue = 'saas' | 'self-hosted';

interface DeploymentTypeProps {
  value: DeploymentTypeValue;
  onChange: (type: DeploymentTypeValue) => void;
}

export function DeploymentType({ value, onChange }: DeploymentTypeProps) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onChange('saas')}
        className={`px-6 py-2 rounded-md transition-colors ${
          value === 'saas'
            ? 'bg-blue-500 text-white shadow-md'
            : 'bg-white text-gray-700 border hover:border-blue-300'
        }`}
      >
        SAAS
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onChange('self-hosted')}
        className={`px-6 py-2 rounded-md transition-colors ${
          value === 'self-hosted'
            ? 'bg-blue-500 text-white shadow-md'
            : 'bg-white text-gray-700 border hover:border-blue-300'
        }`}
      >
        Self Hosted
      </motion.button>
    </div>
  );
}