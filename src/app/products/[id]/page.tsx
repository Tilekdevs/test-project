'use client';
import { useProductStore } from '@/app/store/useProductStore';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams(); 
  const { products } = useProductStore();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Продукт не найден</div>;

  return (
    <div className="container mx-auto p-4">
      <Link href="/products" className="text-blue-500 mb-4 inline-block">
        Назад к списку
      </Link>
      <img src={product.image} alt={product.title} className="h-64 object-contain" />
      <h1 className="text-2xl">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
    </div>
  );
}