import React, { useEffect, useState } from 'react';
import Style from './Brands.module.css';
import axios from 'axios';


export default function Brands() {


    const [brands, setBrands] = useState([]);

    function getBrands() {
      axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
      .then( ({data})=>{
        console.log(data.data);
        setBrands(data.data)
      })
      .catch( ()=>{

      })
    }
    useEffect(()=>{
      getBrands()
    } , []);
  return <>
    <div className="row">
      {brands.map( (brand)=> 
      <div key={brand.id} className='w-1/6 py-4 '>
        <div className="brand relative py-4 px-4">
          <img className='w-full' src={brand.image} alt="" />
          <div className="cover ">
            <h3 className='text-2xl font-extrabold pt-2'>{brand.name}</h3>
          </div>
        </div>
      </div>)}
      
    </div>
  </>
}
