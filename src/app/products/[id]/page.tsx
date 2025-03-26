import { Product } from '@/app/store/useProductStore';
import ProductDetails from './ProductDetails';

type FakeStoreApiProduct = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: FakeStoreApiProduct[] = await response.json();
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    price: item.price,
    category: item.category,
    isLiked: false,
  })) as Product[];
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === Number(resolvedParams.id));

  if (!product) {
    return <div className="container mx-auto p-4">Продукт не найден</div>;
  }

  return <ProductDetails product={product} />;
}

