import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  isLiked: boolean;
  category: string;
};

type ProductState = {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  fetchProducts: () => Promise<void>;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
  editProduct: (product: Product) => void;
  addProduct: (product: Omit<Product, 'id' | 'isLiked'>) => void;
  setPage: (page: number) => void;
};

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      currentPage: 1,
      itemsPerPage: 6,
      fetchProducts: async () => {
        const currentProducts = get().products;
        if (currentProducts.length === 0) {
          console.log('Загружаем продукты с API, так как store пуст');
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          const newProducts = data.map((p: Product) => ({ ...p, isLiked: false }));
          set({ products: newProducts });
        }
      },
      toggleLike: (id) =>
        set((state) => {
          const newProducts = state.products.map((p) =>
            p.id === id ? { ...p, isLiked: !p.isLiked } : p
          );
          return { products: newProducts };
        }),
      deleteProduct: (id) =>
        set((state) => {
          const newProducts = state.products.filter((p) => p.id !== id);
          return { products: newProducts };
        }),
      addProduct: (product) =>
        set((state) => {
          const newProduct = { ...product, id: Date.now(), isLiked: false };
          const newProducts = [...state.products, newProduct];
          return { products: newProducts };
        }),
      editProduct: (product) =>
        set((state) => {
          const newProducts = state.products.map((p) =>
            p.id === product.id ? { ...p, ...product } : p
          );
          return { products: newProducts };
        }),
      setPage: (page) =>
        set((state) => {
          return { currentPage: page };
        }),
    }),
    {
      name: 'product-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        products: state.products,
        currentPage: state.currentPage,
        itemsPerPage: state.itemsPerPage,
      }),
    }
  )
);