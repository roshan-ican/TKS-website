import axios from "axios"
import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"
import Products from "./Products"

const ProductItem = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  const [loading, setLoading] = useState(false)

  const headers = {
    "Content-Type": "application/json",
  }
  const url = "https://www.fastxpo.com/mediatorpos/385/menudetail.htm"
  // console.log(url, "Paginate here")

  const fetchProducts = async () => {
    setLoading(true)
    const response = await axios.get(url, { headers })
    setData(response.json())
    console.log("this is data", response.json())

    setLoading(false)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className="font-bold items-center justify-center">Products</h1>
      <Products data={data} loading={loading} />
      {data?.menudetails?.map((menudetail) => {
        menudetail.products?.map((product) => {
          return (
            <button key={product.productid}>
              <Pagination
                // totalPosts={data.length}
                // postsPerPage={postsPerPage}
                // setCurrentPage={setCurrentPage}
                // currentPage={currentPage}
              />
            </button>
          )
        })
      })}
    </div>
  )
}

export default ProductItem
