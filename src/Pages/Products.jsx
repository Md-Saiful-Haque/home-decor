import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';
import { Link } from 'react-router';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='font-bold text-[24px]'>All </h1>
                <Link to='/products'><button className='btn'>Search</button></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;