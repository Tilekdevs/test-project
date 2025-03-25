'use client';
import { Product, useProductStore } from '@/app/store/useProductStore';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = Omit<Product, 'id' | 'isLiked'>;

export default function CreateProductPage() {
  const { addProduct } = useProductStore();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    addProduct(data);
    router.push('/products');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Создать продукт</h1>
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
          Создать
        </button>
      </form>
    </div>
  );
}