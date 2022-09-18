import axios from "axios"
import React, { useEffect, useState } from "react"
import Products from "./Products"

export default function ProductItem() {
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
  //only runs when it mounts

  return (
    <div className="container mx-auto sm:px-4 mt-5">
      <h1 className="text-dark-600 mb-3">Products</h1>
      <Products data={data} loading={loading} />
    </div>
  )
}
