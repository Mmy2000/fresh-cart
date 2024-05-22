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
import ProductDetails from './components/ProductDetails/ProductDetails';
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

let router = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'productdetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'about' , element:<ProtectedRoute><About/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])
function App() {
  const [count, setCount] = useState(0)
  

  return <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </UserContextProvider>
 }

export default App
