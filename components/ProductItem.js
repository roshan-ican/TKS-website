import axios from "axios"
import React, { useEffect, useState } from "react"
import Products from "./Products"
// import Pagination from "./Pagination"

const ProductItem = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const headers = {
    "Content-Type": "application/json",
  }
  const url = "https://www.fastxpo.com/mediatorpos/385/menudetail.htm"

  const fetchProducts = async () => {
    setLoading(true)
    const res = await axios.get(url, { headers })
    setData(res.data)
    console.log('this is data', res.data);

    setLoading(false)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

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
