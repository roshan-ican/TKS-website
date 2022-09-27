import React, { useState } from "react"

const Pagination = ({
  totalProducts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  data,
}) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalProducts / postsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className="pagination">
      {data?.menudetails?.map((menudetail) => {
        menudetail.products?.map((page, product) => {
          return (
            <button
              key={product.productid}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
          )
        })
      })}
    </div>
  )
}

export default Pagination
