'use client';
import { Product, useProductStore } from '@/app/store/useProductStore';
import { useForm } from 'react-hook-form';

type EditProductFormProps = {
  product: Product;
};

type FormData = Omit<Product, 'id' | 'isLiked'>;

export default function EditProductForm({ product }: EditProductFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      category: product.category,
    },
  });

  const editProduct = useProductStore((state) => state.editProduct);

  const onSubmit = (data: FormData) => {
    const updatedProduct = { ...product, ...data };
    editProduct(updatedProduct);
    window.location.href = `/products/${product.id}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Редактировать продукт</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('title', { required: 'Название обязательно' })}
            placeholder="Название"
            className="w-full p-2 border border-solid border-black"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div>
          <textarea
            {...register('description', { required: 'Описание обязательно' })}
            placeholder="Описание"
            className="w-full p-2 border border-solid border-black"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <div>
          <input
            {...register('image', { required: 'Ссылка на картинку обязательна' })}
            placeholder="URL картинки"
            className="w-full p-2 border border-solid border-black"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <div>
          <input
            type="number"
            {...register('price', { required: 'Цена обязательна', min: 0 })}
            placeholder="Цена"
            className="w-full p-2 border border-solid border-black"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>
        <div>
          <input
            {...register('category', { required: 'Категория обязательна' })}
            placeholder="Категория (например, electronics)"
            className="w-full p-2 border border-solid border-black"
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Сохранить
        </button>
      </form>
    </div>
  );
}