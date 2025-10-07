import React from 'react';
import { Link } from 'react-router';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const {products , loading , error} = useProducts();
    //console.log(data)
    //const products = useLoaderData();
    const featureProduct = products.slice(0 , 6)

    return (
        <div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='font-bold text-[24px]'>Featured Products</h1>
                <Link to='/products'><button className='bg-[#50B1C9] py-3 px-5 rounded-[8px]'>Show All</button></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    featureProduct.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;