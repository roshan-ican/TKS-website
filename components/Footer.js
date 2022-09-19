import Image from "next/image"
import React from "react"

export default function Footer() {
  return (
    <>
      <div className="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div
          className="flex justify-around
        "
        >
          <div className="mb-6 md:mb-0">
            <a>
              <img
                src="https://www.fastxpo.com/mediatorpos//images/outlet/2614692498348358tks_%20provision.jpg"
                alt="TKS"
                className="h-12 mr-3 rounded-full hover:rounded-lg"
              />
              <span className="items-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TKS
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-dark-900 dark:text-white">
                Company
              </h2>
              <ul className="text-dark-600">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    All Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Location map
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-dark-900 dark:text-white">
                Services
              </h2>
              <ul className="text-dark-600 dark:text-dark-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Order Tracking
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Wishlist
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Login
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    My Account
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* the news */}
            <div className="bg-dark-100 text-center">
              <div className="px-6 pt-6">
                <form
                  action="
              "
                  className="flex"
                >
                  <p class="text-dark-800 mb-4">
                    <h4 className="font-bold">Sign up for our newsletter</h4>
                  </p>
                </form>
                <div className="flex md:mb-6">
                  <input
                    type="text"
                    className="form-control w-full min-w-full px-3 py-1 5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  />
                  <button className="theme-btn-1 btn" type="submit">
                    <i className="fas fa-location-arrow fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ltn__copyright-area ltn__copyright-2 section-bg-1 border-top  ltn__border-top-2--- plr--5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="ltn__copyright-design clearfix">
                  <strong>
                    All Rights Reserved @ Company{" "}
                    <span class="current-year">2022</span>
                  </strong>
                </div>
              </div>
              <div class="col-md-6 col-12 align-self-center">
                <div class="ltn__copyright-menu text-right">
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Claim</a>
                    </li>
                    <li>
                      <a href="#">Privacy &amp; Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
