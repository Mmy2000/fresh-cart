import React, { useEffect, useState } from 'react';
import Style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProductDetails() {
  let {id} = useParams();
  const [productDetails, setProductDetails] = useState(null);
  function getProductDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then( ({data})=>{
      setProductDetails(data.data)
    })
    .catch( ()=>{

    })
  }
    
    useEffect(()=>{
      getProductDetails(id)
    } , []);
  return <>
    <div className="row">
      <div className='w-1/4'>
        <img className='w-full' src={productDetails?.imageCover} alt={productDetails?.title} />
      </div>
      <div className='w-3/4 p-6'>
        <h1 className='text-lg font-normal text-slate-900 '>{productDetails?.title}</h1>
        <p className='font-light mt-4 text-gray-700'>{productDetails?.description}</p>
        <div className='flex items-center mt-4 w-full justify-between'>
          <span className='mb-2'>{productDetails?.price} EGP</span>
          <span>{productDetails?.ratingsAverage} <i className='fas fa-star text-yellow-500'></i></span>

        </div>
        <button className='btn'>add to cart</button>
      </div>
    </div>
  </>
}
