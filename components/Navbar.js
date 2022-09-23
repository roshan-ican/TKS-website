import React, { useState } from "react"
import Link from "next/link"
import Search from "./Search"
import Cart from "./Cart"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Context } from "../context"

export default function Navbar() {
  const { state } = useContext(Context)
  const [isCartPopUpOpen, setIsCartPopUpOpen] = useState(false)
  
  return (
    <>
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

          <div className="relative">
            <Button
              style={{ width: "3rem", height: "3rem" }}
              variant="outline-primary"
              className="rounded-full"
              position="relative"
              onClick={() => setIsCartPopUpOpen(isCartPopUpOpen ? false:true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
            </Button>
            {isCartPopUpOpen && (
              <div
                className="absolute"
                style={{ zIndex: "20", background: "#fff", right: "20px" }}
              >
                <Cart />
              </div>
            )}
          </div>

          <Link href="/">
            <a className="p-2">Lets Chat</a>
          </Link>
        </div>
      </nav>
    </>
  )
}
