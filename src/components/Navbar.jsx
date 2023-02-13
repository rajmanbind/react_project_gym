import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsNavShowing(false)}
        >
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? " show_nav" : " hide_nav"}`}
        >
          {links.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active_nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle_btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
