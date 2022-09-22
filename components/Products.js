import React, { useContext } from "react"
import { CartStateContext, Context, toggleCartPopup } from "../context"

const Products = ({ data, loading }) => {
  const { dispatch, state } = useContext(Context)
  
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 py-4">
      {data?.menudetails?.map((menudetail) =>
        menudetail.products?.map((product) => {
          return (
            <div key={product.productid}>
              <a>
                <img
                  src={product.imagename}
                  alt={product.productname}
                  className="object-contain w-32 h-48 rounded shadow"
                />
              </a>

              <div>
                <a>
                  <h2 className="text-lg">{product.productname}</h2>
                </a>
                <strong className="flex items-center justify-between">
                  ₹{product.sellprice}
                </strong>

                <button
                  type="button"
                  className="primary-button p-2"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: product })
                    setTimeout(() => console.log(state, "state"), 1000)
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Products
