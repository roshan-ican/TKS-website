import React from "react"

const Test = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Departmental Store</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Place favicon.png in the root directory */}
      <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
      {/* Font Icons css */}
      <link rel="stylesheet" href="css/font-icons.css" />
      {/* plugins css */}
      <link rel="stylesheet" href="css/plugins.css" />
      {/* Main Stylesheet */}
      <link rel="stylesheet" href="css/style.css" />
      {/* Responsive css */}
      <link rel="stylesheet" href="css/responsive.css" />
      {/*[if lte IE 9]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]*/}
      {/* Add your site or application content here */}
      {/* Body main wrapper start */}
      <div className="body-wrapper">
        {/* HEADER AREA START (header-3) */}
        <header className="ltn__header-area ltn__header-3 section-bg-6">
          <div className="ltn__header-middle-area">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo">
                    <h2>Departmental Store</h2>
                  </div>
                </div>
                <div className="col header-contact-serarch-column d-none d-lg-block">
                  <div className="header-contact-search">
                    {/* header-feature-item */}
                    {/* header-search-2 */}
                    <div className="header-search-2">
                      <form id="#123" method="get" action="#">
                        <input
                          type="text"
                          name="search"
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
                <div className="col">
                  {/* header-options */}
                  <div className="ltn__header-options">
                    <ul>
                      <li className="d-lg-none">
                        {/* header-search-1 */}
                        <div className="header-search-wrap">
                          <div className="header-search-1">
                            <div className="search-icon">
                              <i className="icon-search for-search-show" />
                              <i className="icon-cancel for-search-close" />
                            </div>
                          </div>
                          <div className="header-search-1-form">
                            <form id="#" method="get" action="#">
                              <input
                                type="text"
                                name="search"
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
                      </li>
                      <li className="d-none---">
                        {/* user-menu */}
                        <div className="ltn__drop-menu user-menu">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="icon-user" />
                              </a>
                              <ul>
                                <li>
                                  <a href="login.html">Sign in</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                                <li>
                                  <a href="account.html">My Account</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {/* mini-cart 2 */}
                        <div className="mini-cart-icon mini-cart-icon-2">
                          <a
                            href="#ltn__utilize-cart-menu"
                            className="ltn__utilize-toggle"
                          >
                            <span className="mini-cart-icon">
                              <i className="icon-shopping-cart" />
                              <sup>2</sup>
                            </span>
                            <h6>
                              <span>Your Cart</span>{" "}
                              <span className="ltn__secondary-color">
                                ₹89.25
                              </span>
                            </h6>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-middle-area end */}
          {/* header-bottom-area start */}
          <div className="header-bottom-area ltn__border-top ltn__header-sticky ltn__sticky-bg-white ltn__primary-bg--- section-bg-1 menu-color-white--- d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col header-menu-column justify-content-center">
                  <div className="sticky-logo">
                    <div className="site-logo">
                      <h2>Departmental Store</h2>
                    </div>
                  </div>
                  <div className="header-menu header-menu-2">
                    <nav>
                      <div className="ltn__main-menu">
                        <h3 style={{ padding: "15px 0px 10px 0px" }}>
                          {" "}
                          Products{" "}
                        </h3>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-bottom-area end */}
        </header>
        {/* HEADER AREA END */}
        {/* Utilize Cart Menu Start */}
        <div
          id="ltn__utilize-cart-menu"
          className="ltn__utilize ltn__utilize-cart-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              <div className="clearfix mini-cart-item">
                <div className="mini-cart-img">
                  <a href="#">
                    <img src="img/product/1.jpg" alt="Image" />
                  </a>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info">
                  <h6>
                    <a href="#">Chilli Powder</a>
                  </h6>
                  <span className="mini-cart-quantity">1 x ₹65.00</span>
                </div>
              </div>
              <div className="clearfix mini-cart-item">
                <div className="mini-cart-img">
                  <a href="#">
                    <img src="img/product/2.jpg" alt="Image" />
                  </a>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info">
                  <h6>
                    <a href="#">Aashirvad Salt</a>
                  </h6>
                  <span className="mini-cart-quantity">1 x ₹85.00</span>
                </div>
              </div>
              <div className="clearfix mini-cart-item">
                <div className="mini-cart-img">
                  <a href="#">
                    <img src="img/product/3.jpg" alt="Image" />
                  </a>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info">
                  <h6>
                    <a href="#">Amulya</a>
                  </h6>
                  <span className="mini-cart-quantity">1 x ₹68.00</span>
                </div>
              </div>
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>
                  Subtotal: <span>₹310.00</span>
                </h5>
              </div>
              <div className="btn-wrapper">
                <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                  View Cart
                </a>
                <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                  Checkout
                </a>
              </div>
              <p>Free Shipping on All Orders Over ₹100!</p>
            </div>
          </div>
        </div>
        {/* Utilize Cart Menu End */}
        {/* Utilize Mobile Menu Start */}
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <h2>Departmental Store</h2>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
              <form action="#">
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <a href="account.html" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="cart.html" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="fas fa-shopping-cart" />
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="ltn__social-media-2">
              <ul>
                <li>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Utilize Mobile Menu End */}
        <div className="ltn__utilize-overlay" />
        <div className="mobile-header-menu-fullwidth">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-lg-none">
                  <span>MENU</span>
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER AREA START (slider-3) */}
        <div className="ltn__slider-area ltn__slider-3--- section-bg-1--- mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                {/* CATEGORY-MENU-LIST START */}
                <div className="ltn__category-menu-wrap">
                  <div className="ltn__category-menu-title">
                    <h2 className="section-bg-1 text-color-white---">
                      categories
                    </h2>
                  </div>
                  <div className="ltn__category-menu-toggle ltn__one-line-active">
                    <ul>
                      {/* Submenu Column - unlimited */}
                      <li className="ltn__category-menu-item ltn__category-menu-drop">
                        <a href="shop.html">
                          <i className="icon-shopping-bags" />
                          Vegetables and Fruits{" "}
                        </a>
                        <ul className="ltn__category-submenu ltn__category-column-5">
                          <li className="ltn__category-submenu-title ltn__category-menu-drop">
                            <a href="#">Vegetables</a>
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
                            <a href="#">Fruits</a>
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
                      {/* Submenu Column - 2 */}
                      <li className="ltn__category-menu-item ltn__category-menu-drop">
                        <a href="shop.html">
                          <i className="icon-user" />
                          Butter and Cream
                        </a>
                        <ul className="ltn__category-submenu ">
                          <li className="ltn__category-submenu-title ltn__category-menu-drop">
                            <a href="#">Butter and Cream</a>
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
                      {/* Submenu */}
                      <li className="ltn__category-menu-item ltn__category-menu-drop">
                        <a href="shop.html">
                          <i className="icon-shopping-cart" />
                          Oil and Vinegar
                        </a>
                      </li>
                      {/* Submenu */}
                      <li className="ltn__category-menu-item ltn__category-menu-drop">
                        <a href="shop.html">
                          <i className="icon-tag" />
                          Breads
                        </a>
                      </li>
                      {/* Submenu */}
                      <li className="ltn__category-menu-item ltn__category-menu-drop">
                        <a href="shop.html">
                          <i className="icon-shopping-bags" />
                          Apple Juice{" "}
                        </a>
                      </li>
                      {/* Submenu */}
                      <li className="ltn__category-menu-item ltn__category-menu-drop">
                        <a href="shop.html">
                          <i className="icon-options" />
                          Dry Nuts
                        </a>
                      </li>
                      {/* Show more menu */}
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
                          More categories{" "}
                          <span className="cat-thumb icon-plus" />
                        </a>
                        <a className="rx-show">
                          close menu <span className="cat-thumb icon-remove" />
                        </a>
                      </li>
                      {/* Single menu end */}
                    </ul>
                  </div>
                </div>
                {/* END CATEGORY-MENU-LIST */}
              </div>
              <div className="col-lg-9">
                {/*  right start */}
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="liton_product_grid"
                  >
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <div className="row">
                        {/* ltn__product-item */}
                        <div className="col-xl-4 col-sm-6 col-6">
                          <div className="text-center ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src="img/product/1.jpg" alt="#" />
                              </a>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">Chilli Powder</a>
                              </h2>
                              <div className="product-price">
                                <span>₹149.00</span>
                                <del>₹162.00</del>
                              </div>
                              <div className="ltn__product-details-menu-2">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="theme-btn-1 btn btn-effect-1"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                      <span>ADD TO CART</span>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="cart-plus-minus">
                                      <input
                                        type="text"
                                        name="qtybutton"
                                        className="cart-plus-minus-box"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-xl-4 col-sm-6 col-6">
                          <div className="text-center ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src="img/product/2.jpg" alt="#" />
                              </a>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">
                                  Aashirvad Salt
                                </a>
                              </h2>
                              <div className="product-price">
                                <span>₹62.00</span>
                                <del>₹85.00</del>
                              </div>
                              <div className="ltn__product-details-menu-2">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="theme-btn-1 btn btn-effect-1"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                      <span>ADD TO CART</span>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="cart-plus-minus">
                                      <input
                                        type="text"
                                        name="qtybutton"
                                        className="cart-plus-minus-box"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-xl-4 col-sm-6 col-6">
                          <div className="text-center ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src="img/product/3.jpg" alt="#" />
                              </a>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">Hot</li>
                                </ul>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">Amulya</a>
                              </h2>
                              <div className="product-price">
                                <span>₹75.00</span>
                                <del>₹92.00</del>
                              </div>
                              <div className="ltn__product-details-menu-2">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="theme-btn-1 btn btn-effect-1"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                      <span>ADD TO CART</span>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="cart-plus-minus">
                                      <input
                                        type="text"
                                        name="qtybutton"
                                        className="cart-plus-minus-box"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-xl-4 col-sm-6 col-6">
                          <div className="text-center ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src="img/product/4.jpg" alt="#" />
                              </a>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">Lion Dates</a>
                              </h2>
                              <div className="product-price">
                                <span>₹165.00</span>
                                <del>₹1720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-xl-4 col-sm-6 col-6">
                          <div className="text-center ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src="img/product/5.jpg" alt="#" />
                              </a>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">Mr.Gold</a>
                              </h2>
                              <div className="product-price">
                                <span>₹149.00</span>
                                <del>₹162.00</del>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-xl-4 col-sm-6 col-6">
                          <div className="text-center ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img src="img/product/6.jpg" alt="#" />
                              </a>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Add to Cart"
                                      data-toggle="modal"
                                      data-target="#add_to_cart_modal"
                                    >
                                      <i className="fas fa-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star-half-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="far fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">Vim </a>
                              </h2>
                              <div className="product-price">
                                <span>₹62.00</span>
                                <del>₹85.00</del>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* right end*/}
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER AREA END */}
        {/* FEATURE AREA START ( Feature - 3) */}
        <div className="ltn__feature-area mt-35 mt--65---">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/8-trolley.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Fast Delivery</h4>
                      <p>Secured &amp; Fast deliveries</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/9-money.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Payment Options</h4>
                      <p>Multiple payment methods</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/5-madel.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>100% Satisfaction</h4>
                      <p>Full satisfaction guarantee</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/7-support.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Customer Support</h4>
                      <p> 24/7 Customer support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURE AREA END */}
        {/* FOOTER AREA START */}
        <footer className="ltn__footer-area ">
          <div className="footer-top-area section-bg-1 plr--5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-about-widget">
                    <div className="mb-10 footer-logo">
                      <div className="site-logo">
                        <h2>Departmental Store </h2>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the and typesetting
                      industry. Lorem Ipsum is dummy text of the printing.
                    </p>
                    <div className="footer-address">
                      <ul>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-placeholder" />
                          </div>
                          <div className="footer-address-info">
                            <p>Pallavaram, Chennai</p>
                          </div>
                        </li>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-call" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <a href="tel:+91 908989 898989">
                                +91 908989 898989
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-mail" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <a href="mailto:info@dpstore.com">
                                info@dpstore.com
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-20 ltn__social-media">
                      <ul>
                        <li>
                          <a href="#" title="Facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Twitter">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Youtube">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="clearfix footer-widget footer-menu-widget">
                    <h4 className="footer-title">Company</h4>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">All Products</a>
                        </li>
                        <li>
                          <a href="#">Locations Map</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="clearfix footer-widget footer-menu-widget">
                    <h4 className="footer-title">Services.</h4>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">Order tracking</a>
                        </li>
                        <li>
                          <a href="#">Wish List</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">My account</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                  <div className="footer-widget footer-newsletter-widget">
                    <h4 className="footer-title">Newsletter</h4>
                    <p>
                      Subscribe to our weekly Newsletter and receive updates via
                      email.
                    </p>
                    <div className="footer-newsletter">
                      <form action="#">
                        <input type="email" name="email" placeholder="Email*" />
                        <div className="btn-wrapper">
                          <button className="theme-btn-1 btn" type="submit">
                            <i className="fas fa-location-arrow" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <h5 className="mt-30">We Accept</h5>
                    <img src="img/icons/payment-4.png" alt="Payment Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__copyright-area ltn__copyright-2 section-bg-1 border-top ltn__border-top-2--- plr--5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="clearfix ltn__copyright-design">
                    <p>
                      All Rights Reserved @ Company{" "}
                      <span className="current-year" />
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-12 align-self-center">
                  <div className="text-right ltn__copyright-menu">
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
        </footer>
        {/* FOOTER AREA END */}
        {/* MODAL AREA START (Quick View Modal) */}
        <div className="ltn__modal-area ltn__quick-view-modal-area">
          <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                    {/* <i class="fas fa-times"></i> */}
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="modal-product-img">
                            <img src="img/product/4.png" alt="#" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="modal-product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> ( 95 Reviews )</a>
                                </li>
                              </ul>
                            </div>
                            <h3>Vegetables Juices</h3>
                            <div className="product-price">
                              <span>₹149.00</span>
                              <del>₹165.00</del>
                            </div>
                            <div className="modal-product-meta ltn__product-details-menu-1">
                              <ul>
                                <li>
                                  <strong>Categories:</strong>
                                  <span>
                                    <a href="#">Parts</a>
                                    <a href="#">Car</a>
                                    <a href="#">Seat</a>
                                    <a href="#">Cover</a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="ltn__product-details-menu-2">
                              <ul>
                                <li>
                                  <div className="cart-plus-minus">
                                    <input
                                      type="text"
                                      name="qtybutton"
                                      className="cart-plus-minus-box"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="theme-btn-1 btn btn-effect-1"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                    <span>ADD TO CART</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="ltn__product-details-menu-3">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    className=""
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                    <span>Add to Wishlist</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=""
                                    title="Compare"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="fas fa-exchange-alt" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <hr />
                            <div className="ltn__social-media">
                              <ul>
                                <li>Share:</li>
                                <li>
                                  <a href="#" title="Facebook">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Twitter">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Linkedin">
                                    <i className="fab fa-linkedin" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Instagram">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL AREA END */}
        {/* MODAL AREA START (Add To Cart Modal) */}
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img src="img/product/1.png" alt="#" />
                          </div>
                          <div className="modal-product-info">
                            <h5>
                              <a href="product-details.html">
                                Vegetables Juices
                              </a>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" /> Successfully
                              added to your Cart
                            </p>
                            <div className="btn-wrapper">
                              <a
                                href="cart.html"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Cart
                              </a>
                              <a
                                href="checkout.html"
                                className="theme-btn-2 btn btn-effect-2"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img src="img/icons/payment.png" alt="#" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL AREA END */}
        {/* MODAL AREA START (Wishlist Modal) */}
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img src="img/product/7.png" alt="#" />
                          </div>
                          <div className="modal-product-info">
                            <h5>
                              <a href="product-details.html">
                                Vegetables Juices
                              </a>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" /> Successfully
                              added to your Wishlist
                            </p>
                            <div className="btn-wrapper">
                              <a
                                href="wishlist.html"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Wishlist
                              </a>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img src="img/icons/payment.png" alt="#" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL AREA END */}
      </div>
      {/* Body main wrapper end */}
      {/* preloader area start */}
      <div className="preloader d-none" id="preloader">
        <div className="preloader-inner">
          <div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
      </div>
      {/* preloader area end */}
      {/* All JS Plugins */}
      {/* Main JS */}
    </>
  )
}

export default Test
