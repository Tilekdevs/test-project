'use client'
// import { useProductStore } from '@/app/store/useProductStore'
import { useState } from 'react'

export const ProductFilter = () => {
	const [filter, setFilter] = useState<'all' | 'liked'>('all')
	// const { products } = useProductStore()

	return (
		<select
			value={filter}
			onChange={e => setFilter(e.target.value as 'all' | 'liked')}
			className='mb-4 p-2 border border-solid border-black rounded'
		>
			<option value='all'>Все продукты</option>
			<option value='liked'>Избранное</option>
		</select>
	)
}
