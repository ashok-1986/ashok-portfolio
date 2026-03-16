import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Ashok Verma | Digital Analytics Strategist',
  description: '15 years of converting digital noise into strategic intelligence. Founder of Alchemetryx Consulting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
