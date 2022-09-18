import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect } from "react"
import Category from "./category"
import Footer from "./Footer"
import ProductItem from "./ProductItem"
import Search from "./Search"

export default function Layout({ title, children }) {
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
          <nav className="flex items-center justify-between h-12 px-4 shadow-md">
            <Link href="/">
              <a className="flex items-center justify-center gap-4 text-xl font-bold tracking-widest">
                <img
                  src="https://www.fastxpo.com/mediatorpos//images/outlet/2614692498348358tks_%20provision.jpg"
                  alt="TKS"
                  className="h-12 rounded-full hover:rounded-lg"
                />
                TKS
              </a>
            </Link>
            <div className="items-center justify-center">
              <Search />
            </div>
            <div className="flex items-center justify-center">
              <div>
                <Link href="/">
                  <a className="p-2">Home</a>
                </Link>
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              </div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/">
                <a className="p-2">Lets Chat</a>
              </Link>
            </div>
          </nav>
        </header>
        <div className="flex flex-row py-5">
          <div className="basis-1/5">
            <Category />
          </div>
          <ProductItem />
          <main className="container px-4 m-auto mt-4">{children}</main>
        </div>

        <Footer />
        {/* <footer className="flex justify-center h-10 shadow-inner items">
          <p>
            Powered by{" "}
            <a href="https://www.fastxpo.com/fxp/index.htm">@Fastexpo</a>
          </p>
        </footer> */}
      </div>
    </>
  )
}
