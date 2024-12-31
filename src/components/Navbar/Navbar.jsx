import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNav";
import MobileNavbar from "./MobileNav";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check the screen size
  const updateNavbarView = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  };

  useEffect(() => {
    // Initial check
    updateNavbarView();

    // Add resize listener
    window.addEventListener("resize", updateNavbarView);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateNavbarView);
  }, []);

  return (
    <div className="navbar-container">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}

export default Navbar;
