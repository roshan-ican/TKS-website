import React from "react"

const Products = ({ data, loading }) => {
  if (loading) {
    return <>Loading...</>
  }
  console.log(data.menudetails, "menudetails")
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
                <button type="button" className="primary-button">
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

//   data.products.map((product) => {
//     return (
//       <div key={product.productid}>
//         <img
//           src={product.imagename}
//           alt={product.productname}
//           className="object-contain w-32 h-48 rounded shadow"
//         />
//         <p className="text-lg">{product.productname}</p>
//         <button className="primary-button" type="button">
//           Add to Cart
//         </button>
//       </div>
//     )
//   })
// )

{
  /* {data.menudetails.map((data) =>
        data.products.map((product) => {
          return (
            <div key={product.productid}>
              <img
                src={product.imagename}
                alt={product.productname}
                className="object-contain w-32 h-48 rounded shadow"
              />
              <p className="text-lg">{product.productname}</p>
              <button className="primary-button" type="button">
                Add to Cart
              </button>
            </div>
          )
        })
      )} */
}
