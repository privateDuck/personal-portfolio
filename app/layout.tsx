import './globals.css';
import type { Metadata } from 'next';
import { Syne, IBM_Plex_Mono, JetBrains_Mono, Space_Grotesk } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['200', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-jet-brains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'privateDuck',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  description: 'Systems Engineer · Undergraduate · Backend Dev',
  openGraph: {
    title: 'privateDuck',
    description: 'Systems Engineer · Undergraduate · Backend Dev',
    images: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
