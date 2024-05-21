import React, { useContext, useEffect, useState } from 'react';
import Style from './Navbar.module.css';
import logo from '../../assets/images/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


export default function Navbar() {
    const [counter, setCounter] = useState(0);
    let navigate = useNavigate()
    let {userLogin , setUserLogin} = useContext(UserContext)

    function LogOut() {
      localStorage.removeItem('userTaken')
      setUserLogin(null)
      navigate('/login')
    }

    useEffect(()=>{

    } , []);
  return <>



  <nav className='bg-gray-100 text-center shadow-xl px-10  xl:fixed top-0 left-0 right-0 z-50'>
    <div className="container items-center flex flex-col lg:flex-row justify-between mx-auto py-2">
      <div className='flex flex-col lg:flex-row text-center '>
        <img src={logo} width={120} alt="fresh cart logo " />
        <ul className='flex flex-col lg:flex-row justify-around m-0 '>
          {
            userLogin !== null?<>
              <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/'}> Home </NavLink></li>
          <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/about'}> About </NavLink></li>
          <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/cart'}> Cart </NavLink></li>
          <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/categories'}> Categories </NavLink></li>
          <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/brands'}> Brands </NavLink></li>
          <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/products'}> Products </NavLink></li>
            </>:null}
          
        </ul>
      </div>

      <ul className='flex flex-col lg:flex-row justify-around m-0 '>
        {
          userLogin == null?<>
            <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/login'}> Login </NavLink></li>
          <li className='text-md mx-2 py-1 text-slate-900 font-normal '><NavLink to={'/register'}> Register </NavLink></li>
          </>:<li onClick={LogOut} className='text-md mx-2 py-1 text-slate-900 font-normal cursor-pointer '><span > Logout </span></li>}
          
          
          <li className='text-md mx-2 py-1 text-slate-900 font-normal mt-2 lg:mt-0  items-center flex justify-between '>
            <i className='fab fa-facebook mx-2 fa-sm'></i>
            <i className='fab fa-twitter mx-2 fa-sm'></i>
            <i className='fab fa-instagram mx-2 fa-sm'></i>
            <i className='fab fa-tiktok mx-2 fa-sm'></i>
            <i className='fab fa-youtube mx-2 fa-sm'></i>
          </li>
        </ul>
    </div>


  </nav>
 </>
}
