import axios from "axios";
import { createContext } from "react";

export let wishlistContext = createContext()

export default function WishlistContextProvider(props) {

    let headers = {
      token: localStorage.getItem("userTaken"),
    }
    function displayWishlist() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
            headers
        })
        .then( (response)=> response)
        .catch( (error)=> error)}

    function addToWishlist(productId) {
      return axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        { headers }
      )
      .then( (response)=> response)
      .catch( (error)=> error)
    }
    function deleteFromWishlist(productId) {
      return axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        
        { headers }
      )
      .then( (response)=> response)
      .catch( (error)=> error)
    }
    

    return (
      <wishlistContext.Provider value={{ displayWishlist, addToWishlist,deleteFromWishlist }}>
        {props.children}
      </wishlistContext.Provider>
    );
}