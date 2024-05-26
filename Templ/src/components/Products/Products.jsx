import React, { useContext, useEffect, useState } from 'react';
import Style from './Products.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { RingLoader } from 'react-spinners';
import { CartContext } from '../../Context/CartContext';
import { ToastContainer, toast } from "react-toastify";

export default function Products() {
  //   const [recentProducts, setRecentProducts] = useState([]);

  // function getProducts() {
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   .then( ({data})=>{
  //     setRecentProducts(data.data)
  //   })
  //   .catch( (error)=>{

  //   })
  // }
  //   useEffect(()=>{
  //     getProducts()
  //   } , []);

  let {addToCart} = useContext(CartContext)
  const [isloading, setisLoading] = useState(false);

  async function addProductToCart(productId) {
    setisLoading(true)
    let response = await addToCart(productId)
    if (response.data.status === 'success') {
      toast.success("Product added successfully to your cart");
      setisLoading(false)
    } else {
      toast.error("Product Not added ");
      setisLoading(false)
    }
    // console.log(response);
  }
  function products() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { isPending, isError, error, data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: products,
    refetchInterval: 3000,
    refetchIntervalInBackground: true,
    // staleTime:5000,
    // retry:10
  });
  if (isLoading) {
    return (
      <div className="flex items-center w-full justify-center">
        <RingLoader color="green" />
      </div>
    );
  }
  if (isError) {
    return (
      <>
        <div className="flex items-center w-full justify-center">
          <h3>{error}</h3>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="row">
        {data?.data.data.map((product) => (
          <div key={product.id} className="w-1/2 sm:w-1/4 xl:w-1/6 py-4">
            <div className="product py-4 px-4">
              <Link
                to={`/productdetails/${product.id}/${product.category.name}`}
              >
                <img className="w-full" src={product.imageCover} />
                <span className="block font-light text-green-600">
                  {product.category.name}
                </span>
                <h3 className="text-lg font-normal text-gray-900 mb-4">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="flex items-center justify-between">
                  <span>{product.price} EGP</span>
                  <span>
                    {product.ratingsAverage}{" "}
                    <i className="fas fa-star text-yellow-500"></i>
                  </span>
                </div>
              </Link>
              <button className="btn" onClick={()=> addProductToCart(product.id)}>{isloading?<i className='fas fa-spinner fa-spin me-2'></i>:'add to cart'}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
