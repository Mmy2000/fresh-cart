import React, { useEffect, useState } from 'react';
import Style from './Categories.module.css';
import axios from 'axios';



export default function Categories() {
    const [categories, setCategories] = useState([]);

    function getCategories() {
      axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then( (({data})=>{
        setCategories(data.data)
      }))
      .catch( ()=>{

      })
    }
    useEffect(()=>{
      getCategories()
    } , []);
  return <>
  <div className="row">
    {categories.map( (category)=> 
      <div key={category.id} className='w-1/6 py-4 '>
        <div className="brand relative mx-4 ">
          <img className='w-full h-[300px]' src={category.image} alt="" />
          <div className="cover  ">
            <h3 className='text-2xl font-extrabold pt-2'>{category.name}</h3>
          </div>
        </div>
      </div>
    )}
  </div>
  </>
}
