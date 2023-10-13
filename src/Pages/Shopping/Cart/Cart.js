import React from 'react';
import { FaArrowRight, FaTrash } from "react-icons/fa";



const Cart = ({ clearCart, LocalCart }) => {

    let price = 0
    for (const obj of LocalCart) {
        price = price + (obj.price * obj.quantity)
    }

    // This is another way of for loop.
    const shippingCost = LocalCart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.shipping, 0);

    const tax = (price * 0.10).toFixed(2);
    const Total = (price + parseFloat(tax) + shippingCost).toFixed(2);


    const totalItem = LocalCart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity, 0);


    return (
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${price}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">${shippingCost}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">${Total} USD</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-white hover:bg-blue-600">Check out <FaArrowRight className='inline-flex'></FaArrowRight> </button>
            <button onClick={clearCart} className="mt-3 w-full rounded-md bg-red-600 py-1.5 font-medium text-white hover:bg-red-700">Clear Cart <FaTrash className='inline-flex'></FaTrash> </button>
        </div>
    );
};

export default Cart;