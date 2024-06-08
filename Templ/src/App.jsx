import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Brands from "./components/Brands/Brands";
import BrandDetails from "./components/BrandDetails/BrandDetails";
import Categories from "./components/Categories/Categories";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Notfound from "./components/Notfound/Notfound";
import About from "./components/About/About";
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CategoriesDetails from "./components/CategoriesDetails/CategoriesDetails";
import CartContextPRovider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import Wishlist from "./components/Wishlist/Wishlist";
import WishlistContextProvider from "./Context/wishlistContext";
import Forgot from "./components/Forgot/Forgot";
import VerifyCode from "./components/VerifyCode/VerifyCode";



let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id/:category",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "forgot",
        element: (
            <Forgot />
        ),
      },
      {
        path: "verifyCode",
        element: (
            <VerifyCode/>
        ),
      },
      {
        path: "brands/:brand",
        element: (
          <ProtectedRoute>
            <BrandDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories/:category",
        element: (
          <ProtectedRoute>
            <CategoriesDetails />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {

  return (
    <WishlistContextProvider>
      <CartContextPRovider>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />

            <ReactQueryDevtools></ReactQueryDevtools>
          </UserContextProvider>
        </QueryClientProvider>
      </CartContextPRovider>
    </WishlistContextProvider>
  );
}

export default App;
