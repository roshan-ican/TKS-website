import axios from "axios"
import React, { useEffect, useState } from "react"
import Products from "./Products"
import Pagination from "./Pagination"

const ProductItem = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(9)

  const headers = {
    "Content-Type": "application/json",
  }
  const url = "https://www.fastxpo.com/mediatorpos/385/menudetail.htm"

  const fetchProducts = async () => {
    setLoading(true)
    const res = await axios.get(url, { headers })
    setData(res.data)

    setLoading(false)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  // //only runs when it mounts
  // get current posts
  // const indexOfLastProduct = currentPage * productsPerPage
  // const indexOfFirstProdcts = indexOfLastProduct - productsPerPage
  // const currentProducts = data.slice(indexOfFirstProdcts, indexOfLastProduct)

  // change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
      <h1 className="font-bold items-center justify-center">Products</h1>
      <Products data={data} loading={loading} />
      {/* <Pagination
        productsPerPage={productsPerPage}
        totalProducts={Products.length}
        paginate={paginate}
      /> */}
    </div>
  )
}

export default ProductItem
