import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DarkMode from './Darkmode';
import Header from './Header';
import Providers from './Provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vivi, Web Frontend Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="bg-white dark:bg-black relative">
            <Header />
            <div className="absolute top-2 right-2">
              <DarkMode />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
