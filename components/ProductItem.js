import axios from "axios"
import React, { useState } from "react"
import useSWR from "swr"

const fetcher = (url) => axios.get(url).then((response) => response.data)

export default function ProductItem() {
  const { data, error } = useSWR(
    "https://www.fastxpo.com/mediatorpos/385/menudetail.htm",
    fetcher
  )
  if (error) {
    return <p>{error}</p>
  }
  if (data) {
    console.log(data.menudetails)
    {
      data?.menudetails.map((data) => {
        data.products.map((product) => {
          console.log(product.productname)
        })
      })
    }
  }
  return (
    <div className="card">
      {data?.menudetails.map((data) =>
        data.products.map((product) => {
          return (
            <div
              key={product.productid}
              className="flex flex-col items-center justify-center p-5"
            >
              <img
                src={product.imagename}
                alt={product.productname}
                className="rounded shadow"
              />
              <p>{product.productname}</p>
            </div>
          )
        })
      )}
    </div>
  )
}
