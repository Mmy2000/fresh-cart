import React, { useEffect, useState } from 'react';
import Style from './Allorders.module.css';


export default function Allorders() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return (
    <>
      <div className="orders border mt-4 border-gray-400 rounded p-4">
        <div className="flex justify-between">
          <div>
            <h2>Order ID</h2>
            <h3>#1235</h3>
          </div>
          <div>
            <span className="btn me-2">Under delivery</span>
            <span className="btn">Unpaid</span>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="product shadow p-2 col-span-2">
            <img
              src="https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg"
              alt=""
              className="w-full"
            />
            <h3 className="text-lg font-bold text-gray-900 ">
              Woman Shawl
            </h3>
            <span>555EGP</span>
          </div>
        </div>
      </div>
    </>
  );
}
