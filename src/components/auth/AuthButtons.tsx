import React from 'react';
import { Github } from 'lucide-react';

interface AuthButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

function AuthButton({ icon, text, onClick }: AuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export function AuthButtons() {
  return (
    <div className="space-y-4">
      <AuthButton
        icon={<Github className="h-5 w-5" />}
        text="Sign in with Github"
      />
      <AuthButton
        icon={<img src="/bitbucket.svg" className="h-5 w-5" alt="" />}
        text="Sign in with Bitbucket"
      />
      <AuthButton
        icon={<img src="/azure.svg" className="h-5 w-5" alt="" />}
        text="Sign in with Azure DevOps"
      />
      <AuthButton
        icon={<img src="/gitlab.svg" className="h-5 w-5" alt="" />}
        text="Sign in with GitLab"
      />
    </div>
  );
}