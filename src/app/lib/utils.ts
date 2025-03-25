import { Product } from '@/app/types/index'; 

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Ошибка загрузки продуктов');
  const data = await res.json();
  return data.map((p: Product) => ({ ...p, isLiked: false }));
};