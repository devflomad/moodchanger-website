import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MOODCHANGER.AI',
  description: 'Transforming your mood, one insight at a time. A Flomad Labs product.',
  metadataBase: new URL('https://moodchanger.ai'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
