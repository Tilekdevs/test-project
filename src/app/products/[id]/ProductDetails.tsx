'use client';
import { useProductStore, Product } from '@/app/store/useProductStore';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import EditProductForm from '@/app/edit-product/[id]/EditFormProduct';
import { useEffect, useState } from 'react';

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product: initialProduct }: ProductDetailsProps) {
  const searchParams = useSearchParams();
  const isEditing = searchParams.get('edit') === 'true';
  const { products, fetchProducts } = useProductStore();
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);
  const product = products.find((p) => p.id === initialProduct.id) || initialProduct;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await fetchProducts();
      setLoading(false);
    };
    loadProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {isEditing ? (
        <EditProductForm product={product} />
      ) : (
        <>
          <Link href="/products" className="text-blue-500 mb-4 inline-block">
            Назад к списку
          </Link>
          <Image
            src={product.image}
            alt={product.title}
            className="h-64 object-contain"
            width={256}
            height={256}
          />
          <h1 className="text-2xl mb-4">{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Category: {product.category}</p>
          <Link
            href={`/edit-product/${product.id}?edit=true`}
            className="mt-4 inline-block bg-blue-500 text-white p-2 rounded"
          >
            Редактировать
          </Link>
        </>
      )}
    </div>
  );
}