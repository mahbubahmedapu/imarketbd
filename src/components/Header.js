import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
    <NavLink to="/add" activeClassName="is-active">
      Add Product
    </NavLink>
    {/* <NavLink to="/edit" activeClassName="is-active">
      Edit Product
    </NavLink> */}
  </header>
);

export default Header;
