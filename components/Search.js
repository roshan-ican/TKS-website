import React from "react"

const Search = () => {
  return (
    <div className="block grow max-width-full">
      <div className="flex justify-between w-full sm:w-1/2">
        {/* header-feature-item */}
        {/* header-search-2 */}
        <div className="header-search-2">
          <form id="#123" method="get" action="#">
            <input
              type="text"
              name="search"
              defaultValue=""
              placeholder="Search here..."
            />
            <button type="submit">
              <span>
                <i className="icon-search" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
