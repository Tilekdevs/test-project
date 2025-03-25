import { ReactNode } from 'react';
import './styles/globals.css';


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
            <a href="/" className="mr-4">Главная</a>
            <a href="/create-products" className="ml-4">Создать продукт</a>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}