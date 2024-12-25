import React from 'react';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { RepositoryView } from './components/repository/RepositoryView';
import { LoginView } from './components/auth/LoginView';
import { SignupView } from './components/auth/SignupView';
import { useAuth } from './hooks/useAuth';
import { useDeploymentType } from './hooks/useDeploymentType';

export default function App() {
  const { isAuthenticated, isSignupView, login, signup, logout, switchView } = useAuth();
  const { deploymentType, setDeploymentType } = useDeploymentType();

  return (
    <div className="min-h-screen bg-gradient-radial from-primary-50 via-white to-secondary-50">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#059669',
            },
          },
          error: {
            style: {
              background: '#dc2626',
            },
          },
        }}
      />
      <AnimatePresence mode="wait">
        {isAuthenticated ? (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <Header onLogout={logout} />
            <RepositoryView />
          </motion.div>
        ) : (
          <motion.div
            key={isSignupView ? 'signup' : 'login'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {isSignupView ? (
              <SignupView 
                onSignup={signup} 
                onSwitchToLogin={switchView}
                deploymentType={deploymentType}
                onDeploymentTypeChange={setDeploymentType}
              />
            ) : (
              <LoginView 
                onLogin={login} 
                onSwitchToSignup={switchView}
                deploymentType={deploymentType}
                onDeploymentTypeChange={setDeploymentType}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}