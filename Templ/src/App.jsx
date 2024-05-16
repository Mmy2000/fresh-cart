import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';

let router = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'products' , element:<Products/>},
    {path:'about' , element:<About/>},
    {path:'cart' , element:<Cart/>},
    {path:'brands' , element:<Brands/>},
    {path:'categories' , element:<Categories/>},
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])
function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}></RouterProvider>
}

export default App
