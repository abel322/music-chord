'use client';

import { NotificationProvider } from '@/frontend/src/contexts/NotificationContext';
import { NotificationToast } from '@/frontend/src/components/NotificationToast';

export function NotificationProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      {children}
      <NotificationToast />
    </NotificationProvider>
  );
}
