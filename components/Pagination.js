// import React, { useState, useEffect } from "react"
// import axios from "axios"

// const Pagination = () => {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)

//   const [currentPage, setcurrentPage] = useState(1)
//   const [itemsPerPage, setitemsPerPage] = useState(6)
//   const [pageNumberLimit, setpageNumberLimit] = useState(5)
//   const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
//   const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
//   const pages = []
//   for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//     pages.push(i)
//   }
//   const headers = {
//     "Content-Type": "application/json",
//   }
//   const url = "https://www.fastxpo.com/mediatorpos/385/menudetail.htm"

//   const fetchProducts = async () => {
//     setLoading(true)
//     const res = await axios.get(url, { headers })
//     setData(res.data.menudetails)
//     const info = res.data.menudetails
//     console.log("this is data", info)

//     setLoading(false)
//   }
//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const handleClick = (event) => {
//     setcurrentPage(Number(event.target.productid))
//   }

//   const renderPagesNumbers = pages.map((number) => {
//     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//       return (
//         <li
//           key={number}
//           id={productid}
//           onClick={handleClick}
//           className={currentPage === number ? "active" : null}
//         >
//           {number}
//         </li>
//       )
//     }
//   })
//   const handleNextbtn = () => {
//     setcurrentPage(currentPage + 1)
//     if (currentPage + 1 > maxPageNumberLimit) {
//       setmaxPageNumberLimit(maxPageNumberLimit + maxPageNumberLimit)
//       setminPageNumberLimit(minPageNumberLimit + maxPageNumberLimit)
//     }
//   }
//   const handlePrevbtn = () => {
//     setcurrentPage(currentPage - 1)
//     if ((currentPage - 1) % maxPageNumberLimit === 0) {
//       setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
//       setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
//     }
//   }
//   let pageIncrementBtn = null
//   if (pages.length > maxPageNumberLimit) {
//     pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
//   }

//   let pageDecrementBtn = null
//   if (pages.length > maxPageNumberLimit) {
//     pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
//   }
//   return (
//     <>
//       <ul className="pageNumber">
//         <li>
//           <button
//             onClick={handlePrevbtn}
//             disabled={currentPage == pages[0] ? true : false}
//           >
//             prev
//           </button>
//         </li>
//         {pageDecrementBtn}
//         {renderPagesNumbers}
//         {pageIncrementBtn}
//         <li>
//           <button
//             onClick={handleNextbtn}
//             disabled={currentPage == pages[pages.length - 1] ? true : false}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </>
//   )
// }

// export default Pagination
