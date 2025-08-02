import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'init.partners - Your Partner in Building Enduring Startups',
  description: 'The journey of an early-stage startup is both exciting and challenging. Having the right partners can make all the difference.',
  keywords: 'startup consulting, engineering, go-to-market, fundraising, early-stage startups',
  authors: [{ name: 'init.partners' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}