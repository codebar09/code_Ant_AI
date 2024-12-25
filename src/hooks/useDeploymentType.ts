import { useState } from 'react';
import { DeploymentTypeValue } from '../components/auth/DeploymentType';

export function useDeploymentType() {
  const [deploymentType, setDeploymentType] = useState<DeploymentTypeValue>('saas');
  
  return {
    deploymentType,
    setDeploymentType,
  };
}