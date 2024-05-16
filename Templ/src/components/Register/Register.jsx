import React, { useEffect, useState } from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup'
import { Navigate, useNavigate } from 'react-router-dom';



export default function Register() {

  let formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''
    },
    onSubmit:handleRegister
  })
  async function handleRegister(formValues) {
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , formValues)
    console.log(data);
    let navigate = useNavigate()
    if (data.message === 'success') {
      console.log("success");
      navigate('/')

    }else{
      // error
      console.log("error");
    }
    console.log(formValues);
  }
  return <>
    <form onSubmit={formik.handleSubmit}>
      <input  type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name={formik.values}  />
      <input className='bg-gray-400' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name={formik.values} type="email" />
      <input className='bg-gray-400' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name={formik.values} type="phone" />
      <input className='bg-gray-400' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name={formik.values} type="password" />
      <input className='bg-gray-400' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} name={formik.values} type="password" />
      <button  className='bg-slate-900' type='submit'> send</button>
    </form>
  </>
}
