import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ClientProviders } from '@/shared/providers/ClientProviders';

import '@collexworld/assets/global.css';
import '@/shared/styles/app.css';

export const metadata: Metadata = {
  title: 'collexworld',
  description: 'collexworld is a platform for hiring elite engineers for your company.',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
