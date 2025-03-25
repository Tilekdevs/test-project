import { Product } from '@/app/store/useProductStore';
import { ProductCard } from './ProductCard';

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};