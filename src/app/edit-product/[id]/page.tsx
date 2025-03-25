'use client';
import { Product, useProductStore } from '@/app/store/useProductStore';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

type FormData = Omit<Product, 'id' | 'isLiked'>;

export default function EditProductPage() {
  const { products, editProduct } = useProductStore();
  const router = useRouter();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        category: product.category,
      });
    }
  }, [product, reset]);

  if (!product) {
    return <div className="container mx-auto p-4">Продукт не найден</div>;
  }

  const onSubmit = (data: FormData) => {
    editProduct({ ...data, id: Number(id), isLiked: product.isLiked });
    router.push('/products');
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