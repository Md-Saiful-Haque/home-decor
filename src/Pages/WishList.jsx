import React, { useEffect, useState } from 'react';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('wishlist'))
        if (saveList) setWishlist(saveList)
    }, [])
    return (
        <div className='flex justify-between items-center mt-10'>
            <div>
                <h1 className='font-bold text-[24px]'>Wishlist <span className='text-sm text-gray-500'>wishlist page {wishlist.length}</span></h1>
            </div>
                <button className='bg-[#50B1C9] py-3 px-5 rounded-[8px]'>Sort</button>
        </div>
        
    );
};

export default WishList;