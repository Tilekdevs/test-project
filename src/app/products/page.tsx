// src/app/products/page.tsx
'use client'
import { ProductList } from '@/app/components/ProductList'
import { useProductStore } from '@/app/store/useProductStore'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import React, { useEffect, useState } from 'react'

export default function ProductsPage() {
	const { products, fetchProducts, currentPage, itemsPerPage, setPage } =
		useProductStore()
	const [filter, setFilter] = useState<'all' | 'liked'>('all')
	const [isMounted, setIsMounted] = useState(false)
	const [minPrice, setMinPrice] = useState<number | ''>('')
	const [maxPrice, setMaxPrice] = useState<number | ''>('')
	const [category, setCategory] = useState<string>('all')
	const [searchQuery, setSearchQuery] = useState<string>('')

	useEffect(() => {
		setIsMounted(true)
		if (products.length === 0) {
			fetchProducts()
		}
	}, [fetchProducts, products.length])

	useEffect(() => {
		setPage(1)
	}, [filter, minPrice, maxPrice, category, searchQuery, setPage])

	if (!isMounted) {
		return <div>Загрузка...</div>
	}

	const categories = [
		'all',
		...new Set(products.map(p => p.category).filter(cat => cat != null)),
	]

	let filteredProducts = products

	if (filter === 'liked') {
		filteredProducts = filteredProducts.filter(p => p.isLiked)
	}

	if (minPrice !== '') {
		filteredProducts = filteredProducts.filter(p => p.price >= minPrice)
	}
	if (maxPrice !== '') {
		filteredProducts = filteredProducts.filter(p => p.price <= maxPrice)
	}

	if (category !== 'all') {
		filteredProducts = filteredProducts.filter(p => p.category === category)
	}

	if (searchQuery) {
		const query = searchQuery.toLowerCase()
		filteredProducts = filteredProducts.filter(
			p =>
				p.title.toLowerCase().includes(query) ||
				p.description.toLowerCase().includes(query),
		)
	}

	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number,
	) => {
		setPage(page)
	}

	return (
		<div className='container mx-auto p-4'>
			<div className='mb-4 flex flex-col sm:flex-row gap-4'>
				<select
					value={filter}
					onChange={e => setFilter(e.target.value as 'all' | 'liked')}
					className='p-2 border border-solid border-black rounded'
				>
					<option value='all'>Все продукты</option>
					<option value='liked'>Избранное</option>
				</select>

				<div className='flex gap-2'>
					<input
						type='number'
						placeholder='Мин. цена'
						value={minPrice}
						onChange={e =>
							setMinPrice(e.target.value ? Number(e.target.value) : '')
						}
						className='p-2 border border-solid border-black rounded w-32'
					/>
					<input
						type='number'
						placeholder='Макс. цена'
						value={maxPrice}
						onChange={e =>
							setMaxPrice(e.target.value ? Number(e.target.value) : '')
						}
						className='p-2 border border-solid border-black rounded w-32'
					/>
				</div>

				<select
					value={category}
					onChange={e => setCategory(e.target.value)}
					className='p-2 border border-solid border-black rounded'
				>
					{categories.map((cat, index) => (
						<option key={`${cat}-${index}`} value={cat}>
							{cat === 'all' ? 'Все категории' : cat}
						</option>
					))}
				</select>

				<input
					type='text'
					placeholder='Поиск по названию или описанию...'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					className='p-2 border border-solid border-black rounded w-full sm:w-64'
				/>
			</div>

			{filteredProducts.length === 0 ? (
				<p className='text-center text-gray-500'>
					Нет продуктов, соответствующих фильтру
				</p>
			) : (
				<>
					<ProductList products={paginatedProducts} />
					{filteredProducts.length > 0 && (
						<Stack spacing={2} className='mt-4 flex justify-center items-center h-100'>
							<Pagination
								count={totalPages}
								page={currentPage}
								onChange={handlePageChange}
								color='primary'
							/>
						</Stack>
					)}
				</>
			)}
		</div>
	)
}
