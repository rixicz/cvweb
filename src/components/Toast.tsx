import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2.5 rounded-xl border border-[var(--line-strong)] bg-[#111722]/95 px-4 py-3 text-primary shadow-2xl backdrop-blur-md sm:left-auto sm:right-6 sm:translate-x-0">
      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
