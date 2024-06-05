import type { Metadata } from 'next';
import { REM as FontSans } from 'next/font/google';

import Header from '../components/layout/header';
import { ThemeProvider } from '../components/themeProvider';
import { cn } from '../lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'BidBuddy',
  description: 'BidBuddy | Your Bidding Buddy',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
