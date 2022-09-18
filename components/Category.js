import React from "react"

export default function Category() {
  return (
    <>
      <div className="ltn__category-menu-wrap">
        <div className="ltn__category-menu-title">
          <h2 className="section-bg-1 text-color-white---">categories</h2>
        </div>
        <div className="ltn__category-menu-toggle ltn__one-line-active">
          <ul>
            <li className="ltn__category-menu-item ltn__category-menu-drop">
              <a href="shop.html">
                <i className="icon-shopping-bags" />
                Vegetables and Fruits
                <span className="expand" />
              </a>
              <ul className="ltn__category-submenu ltn__category-column-5 ltn__category-column-no-2">
                <li className="ltn__category-submenu-title ltn__category-menu-drop">
                  <a href="#">
                    Vegetables
                    <span className="expand" />
                  </a>
                  <ul className="ltn__category-submenu-children">
                    <li>
                      <a href="#">Onion</a>
                    </li>
                    <li>
                      <a href="#">Tomoto</a>
                    </li>
                    <li>
                      <a href="#">Pototo</a>
                    </li>
                  </ul>
                </li>
                <li className="ltn__category-submenu-title ltn__category-menu-drop">
                  <a href="#">
                    Fruits
                    <span className="expand" />
                  </a>
                  <ul className="ltn__category-submenu-children">
                    <li>
                      <a href="#">Apples</a>
                    </li>
                    <li>
                      <a href="#">Orange</a>
                    </li>
                    <li>
                      <a href="#">Amla</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="ltn__category-menu-item ltn__category-menu-drop">
              <a href="shop.html">
                <i className="icon-user" />
                Butter and Cream
                <span className="expand" />
              </a>
              <ul className="ltn__category-submenu ltn__category-column-no-1">
                <li className="ltn__category-submenu-title ltn__category-menu-drop">
                  <a href="#">
                    Butter and Cream
                    <span className="expand" />
                  </a>
                  <ul className="ltn__category-submenu-children">
                    <li>
                      <a href="#">Products 1</a>
                    </li>
                    <li>
                      <a href="#">Products 2</a>
                    </li>
                    <li>
                      <a href="#">Products 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="ltn__category-menu-item ltn__category-menu-drop">
              <a href="shop.html">
                <i className="icon-shopping-cart" />
                Oil and Vinegar
                <span className="expand" />
              </a>
            </li>
            <li className="ltn__category-menu-item ltn__category-menu-drop">
              <a href="shop.html">
                <i className="icon-tag" />
                Breads
                <span className="expand" />
              </a>
            </li>
            <li className="ltn__category-menu-item ltn__category-menu-drop">
              <a href="shop.html">
                <i className="icon-shopping-bags" />
                Apple Juice
                <span className="expand" />
              </a>
            </li>
            <li className="ltn__category-menu-item ltn__category-menu-drop">
              <a href="shop.html">
                <i className="icon-options" />
                Dry Nuts
                <span className="expand" />
              </a>
            </li>
            <li className="ltn__category-menu-more-item-child">
              <a href="shop.html">
                <i className="icon-shopping-bags" />
                Apple Juice
              </a>
            </li>
            <li className="ltn__category-menu-more-item-child">
              <a href="shop.html">
                <i className="icon-options" />
                Dry Nuts
              </a>
            </li>
            <li className="ltn__category-menu-more-item-parent">
              <a className="rx-default">
                More categories
                <span className="cat-thumb icon-plus" />
              </a>
              <a className="rx-show">
                close menu
                <span className="cat-thumb icon-remove" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
