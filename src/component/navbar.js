import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/home">
        <img src="https://elementor.dostguru.com/cms/animex/wp-content/uploads/2020/12/logo.png" />
      </Link>
    </div>
  );
}

export default Navbar;
