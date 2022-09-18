import React from "react"

const Products = ({ data, loading }) => {
  if (loading) {
    return <>Loading...</>
  }
  console.log(data.menudetails, "menudetails")
  return (
    <div className="card">
      {data?.menudetails?.map((menudetail) =>
        menudetail.products?.map((product) => {
          return (
            <div key={product.productid}>
              <p>{product.productname}</p>
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
