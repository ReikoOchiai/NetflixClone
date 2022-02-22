import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src="img/netflix.png" className="nav_logo" alt="Netflix Logo" />
      <img
        src="img/netflixMark.png"
        className="nav_avatar"
        alt="Account Logo"
      />
    </div>
  );
}

export default Nav;
