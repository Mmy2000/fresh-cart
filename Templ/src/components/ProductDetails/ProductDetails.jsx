import React, { useEffect, useState } from 'react';
import Style from './ProductDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



export default function ProductDetails() {
  let {id , category} = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  function getProductDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then( ({data})=>{
      setProductDetails(data.data)
    })
    .catch( ()=>{

    })
  }
  function getRelatedProducts(category) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then( ({data})=>{
      let allProducts = data.data
      let related = allProducts.filter( (product)=> product.category.name == category)
      setRelatedProducts(related)
      console.log(relatedProducts);

    })
    .catch( ()=>{

    })
  }
    
    useEffect(()=>{
      getProductDetails(id)
      getRelatedProducts(category)
    } , [id,category]);
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

    <div className="row">
      {relatedProducts?.map((product) => 
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