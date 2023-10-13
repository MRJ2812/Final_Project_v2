import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import { deleteCart, removeItem } from '../../../Utilities/CartLocalStorage';
import { BsFillEmojiFrownFill } from "react-icons/bs";

const CartPage = () => {

    const { CartData, AllBooksData } = useLoaderData();
    console.log(CartData);

    // Keep the loader data in state, cause we change them in future.
    const [LocalCart, setLocalCart] = useState(CartData);

    // After click delete button, this work.
    const deleteItem = (item) => {
        const updateData = LocalCart.filter(data => data !== item);
        setLocalCart(updateData);
        removeItem(item.id);
    }

    const clearCart = () => {
        setLocalCart([]);
        deleteCart()
    }


    return (
        <body>
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                    <div className="rounded-lg md:w-2/3">
                        {
                            LocalCart.map((data, idx) => <Products key={idx} data={data} deleteItem={deleteItem}></Products>)
                        }
                        {
                            LocalCart.length == 0 &&
                            <div className='text-2xl'>
                                <h2>NO Item selected <span className='inline-flex'><BsFillEmojiFrownFill></BsFillEmojiFrownFill></span></h2>
                                <Link className='underline text-blue-600' to='/shoppingPage'>Go to shopping page</Link>
                            </div>
                        }
                    </div>

                    {/* This is cart */}
                    <Cart clearCart={clearCart} LocalCart={LocalCart}></Cart>
                </div>
            </div>
        </body>
    );
};

export default CartPage;