import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';
import { Link } from 'react-router';

const Products = () => {
    const { products } = useProducts()
    const [search , setSearch] = useState('')

    const term = search.trim().toLowerCase()
    const searchProducts = term ? products.filter(product => product.name.toLowerCase().includes(term)) : products
    
    return (
        <div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='font-bold text-[24px]'>All Products <span className='text-sm text-gray-500'>{searchProducts.length} products found</span></h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    searchProducts.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;