import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useContext } from "react"
import { Store } from "../utilis/Store"
import Category from "./category"
import Footer from "./Footer"
import ProductItem from "./ProductItem"
import Search from "./Search"
import { Context } from "../context"
import Cart from "./Cart"
import Navbar from "./Navbar"
import Pagination from "./Pagination"

export default function Layout({ title, children }) {
  const { state } = useContext(Context)
  console.log("---->", state)
  const { cart } = state
  let itemCount = 0

  for (const [key, value] of Object.entries(cart)) {
    itemCount = itemCount + cart[key].qty
  }

  const fetchImage = async () => {
    const response = await axios
      .get("https://www.fastxpo.com/mediatorpos/385/getoutlet.htm")
      .catch((err) => {
        console.log("Err", err)
      })
    console.log(response.data.stores)
  }
  useEffect(() => {
    fetchImage()
  }, [])
  return (
    <>
      <Head>
        <title>{title ? title + "- TKS" : "TKS"}</title>
        <meta name="description" content="TKS Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-content">
        <header>
          <Navbar />
        </header>
        <div className="flex flex-row gap-4 basis-1/4">
          <Category />
          <div className="flex flex-cols-3">
            <ProductItem />
          </div>
        </div>
        {/* <Pagination/> */}
        <Footer />
      </div>
    </>
  )
}
