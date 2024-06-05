import React, { useContext, useEffect, useState } from 'react';
import Style from './Wishlist.module.css';
import { wishlistContext } from "../../Context/wishlistContext";
import { Link } from 'react-router-dom';
Link

export default function Wishlist() {
    let {displayWishlist}  = useContext(wishlistContext);
    const [counter, setCounter] = useState(0);
    const [wishList, setwishList] = useState([]);

    async function getWishlist(){
      let response = await displayWishlist()
      
      
      // console.log(wishList);
      // console.log(response.data.data);
      setwishList(response?.data.data);
      console.log(wishList);
    }
    useEffect(()=>{
      getWishlist()
    } , []);
  return <>
  <>
        <div className="row">
          {wishList?.map((product) => (
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
                <div className='flex justify-between '>
                <button className="btn w-1/2" onClick={()=> addProductToCart(product.id)}>add to cart</button>
                <button className="btn2 w-1/4" onClick={()=> addProductToWishlist(product.id)}><i className="fa-solid fa-heart fa-xl"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    
  </>
}
