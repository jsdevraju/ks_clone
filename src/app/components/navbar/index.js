import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Item from "../item";
import "./style.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <Link to="/">
              <img
                className="logo"
                src="https://ksdevware.com/wp-content/uploads/2020/12/Logo-4.png"
                alt="Razu Islam"
              />
            </Link>

            {/* Menu Item */}
            <div className="menu_nav" onClick={() => setMenu(!menu)}>
              {!menu ? (
                <FaBars
                  size={30}
                  style={{ cursor: "pointer", color: "#0054ff" }}
                />
              ) : (
                <FaRegWindowClose
                  size={30}
                  style={{ cursor: "pointer", color: "#0054ff" }}
                />
              )}
            </div>

            {/* Overlay Menu */}
            <div className={`${menu ? "menu_item active" : "menu_item"}`}>
              <Item text={"Home"} url={"/"} />
              <Item text={"About"} url={"/about"} />
              <Item text={"Blog"} url={"/blog"} />
              <Item text={"Portfolio"} url={"/portfolio"} />
              <Item text={"Hire Me"} url={"/contact"} />
            </div>
            {/* Overlay */}
            <div className={menu ? "overlay show" : "overlay"} onClick={() => setMenu(!menu)}></div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
