import React from 'react';
import { Link } from 'react-router';

const Product = ({product}) => {
    
    const {name , image, price , category , description , id} = product

    return (
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out mt-10">
            <figure className='h-72 overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price : ${price}</p>
                <p>Category : {category}</p>
                <div className="card-actions justify-end">
                   <Link to={`/products/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;