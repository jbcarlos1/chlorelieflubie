import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chlorelieflubie',
  description: 'Your next line of defense',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
