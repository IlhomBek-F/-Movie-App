import React, { useState, useEffect } from "react";
import "../css/navbar.css";
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
      <img src="https://elementor.dostguru.com/cms/animex/wp-content/uploads/2020/12/logo.png" />
    </div>
  );
}

export default Navbar;
