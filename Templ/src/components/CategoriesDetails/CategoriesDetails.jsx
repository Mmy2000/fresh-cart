import React, { useEffect, useState } from 'react';
import Style from './CategoriesDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { RingLoader } from 'react-spinners';




export default function CategoriesDetails() {
  let {category} = useParams()
  const [relatedProducts, setRelatedProducts] = useState(null);
  console.log(category);
  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data;
        let related = allProducts.filter(
          (product) => product.category.name == category
        );
        setRelatedProducts(related);
      })
      .catch(() => {});
  }
  console.log(relatedProducts);
    


    useEffect(()=>{
      getRelatedProducts(category);
    } ,[]);
  return (
    <>
      {relatedProducts ? (
        <div className="row">
          {relatedProducts?.map((product) => (
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
                  <button className="btn">add to cart</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center w-full justify-center">
          <RingLoader color="green" />
        </div>
      )}
    </>
  );
}
