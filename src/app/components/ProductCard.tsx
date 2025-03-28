import { Heart, Pencil, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Product, useProductStore } from '../store/useProductStore'

export const ProductCard = ({ product }: { product: Product }) => {
	const { toggleLike, deleteProduct } = useProductStore()

	const warningDelete = () => {
		if (confirm('Вы уверены что хотите удалить данный продукт?')) {
			deleteProduct(product.id)
		}
	}

	return (
		<div className='border rounded p-4 h-64 flex flex-col h-full'>
			<Link href={`/products/${product.id}`} className='flex-1'>
				<Image
					src={product.image}
					alt={product.title}
					className='h-32 object-contain'
          width={128}
          height={128}
				/>
				<h3 className='text-lg truncate'>{product.title}</h3>
				<p className='text-sm line-clamp-2'>{product.description}</p>
				<p className='font-bold'>{product.price}$</p>
			</Link>
			<div className='flex gap-10 mt-2'>
				<button onClick={() => toggleLike(product.id)}>
					<Heart
						className={product.isLiked ? 'fill-red-500 text-red-500' : ''}
					/>
				</button>
				<button onClick={warningDelete}>
					<Trash className='text-red=100' />
				</button>
				<Link href={`/edit-product/${product.id}`}>
					<Pencil className='text-grey-500' />
				</Link>
			</div>
		</div>
	)
}
