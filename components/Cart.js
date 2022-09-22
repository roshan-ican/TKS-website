import React, { useContext } from "react"
import { Context } from "../context"

const Cart = () => {
  const { state, dispatch } = useContext(Context)
  const { cart } = state
  let total = 0
  for (const [key, value] of Object.entries(cart)) {
    total = total + cart[key].sellprice * cart[key].quantity
  }

  return (
    <div className="flex items-end justify-start py-6">
      <ul className="divide-y divide-gray-200">
        {Object.entries(cart).map(([key, value]) => {
          return (
            <li key={key} className="flex py-6">
              <div className="flex w-20 h-20 border border-gray-200 rounded-md">
                <img
                  src={cart[key].imagename}
                  className="object-contain w-16 h-24 rounded shadow"
                />
              </div>
              <div className="flex flex-col flex-1 ml-4">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{cart[key].name}</h3>
                    <p className="ml-5">{cart[key].sellprice}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {cart[key].productname}
                  </p>
                </div>
                <div className="flex items-end justify-between flex-1 text-sm">
                  <p className="text-gray-500">Qty{cart[key].qty}</p>
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
        <div>
          <a
          href="#"
          className="ml-3 btn btn-primary"
        >
          Checkout
        </a>
        </div>
    </div>
  )
}

export default Cart
