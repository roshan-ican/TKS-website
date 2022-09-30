// import React, { useState } from "react"

// const Pagination = ({
//   totalProducts,
//   postsPerPage,
//   setCurrentPage,
//   currentPage,
//   data,
// }) => {
//   let pages = []
//   for (let i = 1; i <= Math.ceil(totalProducts / postsPerPage); i++) {
//     pages.push(i)
//   }
//   return (
//     <div className="pagination">
//       {data?.menudetails?.map((menudetail) => {
//         menudetail.products?.map((page, product) => {
//           return (
//             <button
//               key={product.productid}
//               onClick={() => setCurrentPage(page)}
//               className={page == currentPage ? "active" : ""}
//             >
//               {page}
//             </button>
//           )
//         })
//       })}
//     </div>
//   )
// }

// export default Pagination
import { data } from "autoprefixer"
import React, { useState, useEffect } from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import ReactPaginate from "react-paginate"

export default function Pagination() {
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(5)
  const [pageCount, setPageCount] = useState(0)
  const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.fastxpo.com/mediatorpos/385/menudetail.htm"
      )
      .then(res => res.json())
      .then(data => {
        console.log(data.menudetails, 'products');
      })
      
      const dataProduct = await response.json()
      setPageCount(Math.ceil(dataProduct.length/perPage))
      setPlayerData(dataProduct.slice(offset, offset+perPage)) 
      console.log(dataProduct);
    }
    fetchData()
  }, [offset])
  return <div></div>
}
