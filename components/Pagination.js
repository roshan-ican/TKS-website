import React from "react"

const Pagination = ({ productsPerPage, totalProducts }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="flex list-reset pl-0 rounded">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className="relative block py-2 px-3 -ml-px leading-normal text-blue bg-white border border-gray-200 no-underline hover:text-blue-800 hover:bg-gray-200"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
