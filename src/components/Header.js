import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Header(){
    return(<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h4 className="navbar-brand " >MY-CART</h4>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/" >Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/cart">CART</Link>
  </li>
  
  </ul>
    </div>
  </div>
</nav>
<Outlet></Outlet>
</>)
} export default Header;
