import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
