import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext()

export default function CartContextProvider(props) {

    let headers = {
      token: localStorage.getItem("userTaken"),
    };

    function displayCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers:headers
        })
        .then( (response)=> response)
        .catch( (error)=> error)
    }

    function addToCart(productId) {
        return axios
          .post(
            `https://ecommerce.routemisr.com/api/v1/cart`,
            {
              productId: productId,
            },
            {
              headers: headers,
            }
          )
          .then((response)=> response)
          .catch((err)=> err);
    }
    return <CartContext.Provider value={{addToCart , displayCart}}>
        {props.children}
    </CartContext.Provider>
}