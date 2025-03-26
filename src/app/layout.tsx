import { ReactNode } from 'react';
import './styles/globals.css';
import Link from 'next/link'


export const metadata = {
  title: 'Магазин продуктов',
  description: 'Тестовое задание',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <Link href="/" className="mr-4">Главная</Link>
            <Link href="/create-products" className="ml-4">Создать продукт</Link>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}