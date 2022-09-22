// // we need a lot of hooks for making context
// import React, {createContext, useContext, useState, useEffect} from 'react'

// import {toast} from 'react-hot-toast'
// import { Context } from '.'

// export const StateContext = ({children}) => {
//   const [showCart, setShowCart] = useState(false)
//   const [cartItems, setCartItems] = useState()
//   const [totalPrice, setTotalPrice] = useState()
//   const [totalQuantities, setTotalQuantities]
// = useState()
//   const [qty, setQty] = useState(1)

//   const onAdd = (product, quantity) => {
//     const checkProductInCart = cartItems.find((item) => item._id === product.productid)
//     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.sellprice + quantity)
//     setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)
//     if(checkProductInCart) {

//       const updatedCartItems = cartItems.map((cartProduct) => {
//         if(cartProduct._id === product.productid)
//         return {
//           ...cartProduct,
//           quantity: cartProduct.quantity + quantity
//         }
//       })
//       setCartItems(updatedCartItems)
//     }else {
//       product.quantity = quantity
//       setCartItems([...cartItems, {...product}])
//     }
//     toast.success(`${qty} ${product.name} added to the cart`)


//   }

//   const incQty = () => {
//     setQty((prevQty) => prevQty + 1)
//   }
//   const decQty = () => {
//     setQty((prevQty) => {
//       if(prevQty - 1 < 1) return 1
//       return prevQty - 1
//     })
//   }
 
//   return (
//     <Context.Provider value={{
//       showCart,
//       cartItems,
//       totalPrice,
//       totalQuantities,
//       qty,
//       incQty,
//       decQty,
//       onAdd
//     }}>
//       {children}
//     </Context.Provider>
//   )
// }

// export const useStateContext = () => useContext(Context)