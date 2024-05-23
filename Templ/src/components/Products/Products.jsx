import React, { useEffect, useState } from 'react';
import Style from './Products.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Products() {
    const [recentProducts, setRecentProducts] = useState([]);

  function getProducts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then( ({data})=>{
      setRecentProducts(data.data)
    })
    .catch( (error)=>{

    })
  }
    useEffect(()=>{
      getProducts()
    } , []);
  return <>
    <div className="row">

    {recentProducts.map( (product)=>
        <div key={product.id} className="w-1/6 py-4">
      <div className="product py-4 px-4">
        <Link to={`/productdetails/${product.id}/${product.category.name}`}>
        <img className='w-full' src={product.imageCover} />
        <span className='block font-light text-green-600'>{product.category.name}</span>
        <h3 className='text-lg font-normal text-gray-900 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
        <div className='flex items-center justify-between'>
          <span>{product.price} EGP</span>
          <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-500'></i></span>

        </div>
        <button className='btn'>add to cart</button>
        </Link>
      </div>
    </div>
    )}

  </div>
  </>
}
