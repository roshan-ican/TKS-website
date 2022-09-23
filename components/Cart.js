import React, { useContext, useState } from "react"
import { Context } from "../context"

const Cart = () => {
  const { state, dispatch } = useContext(Context)
  const { cart } = state
  let total = 0
  for (const [key, value] of Object.entries(cart)) {
    total = total + cart[key].sellprice * cart[key].quantity
  }

  return (
    <div className="flex flex-col items-end justify-start bg-gray-50 ">
 
      <ul className="flex flex-col bg-white">
        {Object.entries(cart).map(([key, value]) => {
          return (
            <li key={key} className="flex py-6">
              <div className="flex flex-row w-20 h-20 border border-gray-200 rounded-md">
                <img
                  src={cart[key].imagename}
                  className="object-contain w-20 h-20 overflow-auto rounded shadow"
                />
              </div>
              <div className="flex flex-col flex-1 ml-4">
                <div className="flex flex-col justify-start items-left ">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3 className="font-medium">{cart[key].productname}</h3>
                    <p className="flex flex-row mx-4">
                      Price: ₹{cart[key].sellprice}
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-between flex-1 text-sm">
                  <p className="text-gray-500">Qty : {cart[key].qty}</p>
                  <div className="flex">
                    <button
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      type="button"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: cart[key],
                        })
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="block py-5">
        <a href="#" className="ml-3 btn btn-primary">
          Checkout
        </a>
      </div>
    </div>
  )
}

export default Cart
