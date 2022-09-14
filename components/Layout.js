import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function Layout({ title, children }) {
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
              <a className="text-xl font-bold tracking-widest">TKS</a>
            </Link>
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
                <a className="p-2">Let's Chat</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="flex justify-center h-10 shadow-inner items">
          <p>
            Powered by{" "}
            <a href="https://www.fastxpo.com/fxp/index.htm">@Fastexpo</a>
          </p>
        </footer>
      </div>
    </>
  )
}
