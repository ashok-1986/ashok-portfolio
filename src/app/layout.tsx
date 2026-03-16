import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import LenisProvider from '@/components/providers/LenisProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://ashok.alchemetryx.com'),
  title: 'Ashok Verma | Systems & Operational Clarity',
  description: '15 years of transforming data into predictable growth systems for owner-led SMEs.',
  alternates: {
    canonical: 'https://ashok.alchemetryx.com',
  },
  openGraph: {
    title: 'Ashok Verma | Systems & Operational Clarity',
    description: 'Operational clarity that reduces owner dependency and makes growth predictable.',
    url: 'https://ashok.alchemetryx.com',
    siteName: 'Ashok Verma Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ashok Verma | Operational Clarity',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Verma | Systems & Operational Clarity',
    description: '15 years of transforming data into predictable growth systems.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
