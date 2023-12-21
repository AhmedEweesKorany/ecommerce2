import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='sticky-top'>
    <nav className="navbar navbar-expand-lg bg-white  navbar-light p-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to={'/home'}> <strong>اللوجو</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">العروض</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase" to={'/Product'}> المنتجات</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link mx-2 text-uppercase" to={'/addProduct'}>أضافة منتج</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">الخدمات</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">About</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-cart-shopping me-1"></i> السلة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-circle-user me-1"></i> الحساب</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar