import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Leonardo Marussig | Portfolio',
  description: 'Full-Stack Developer Portfolio',
  icons: {
    icon: '/images/folder.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
