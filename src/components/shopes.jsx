import React, { useState } from "react"; // Import useState
import { useMediaQuery } from "@mui/material";
import DesktopCard from "./Card/DesktopCard";
import MobileCard from "./Card/MobileCard";
import Navbar from "./Navbar/Navbar";
import shops from "./Card/data";
import ParallelComponents from "./GoodToHave/Good";
import "./Shopes.css";

export default function ResponsiveCard() {
  const isMobile = useMediaQuery("(max-width:750px)");
  const [filteredShops, setFilteredShops] = useState(shops); // Correctly initialize state

  // Filter handler
  const handleFilterChange = (type) => {
    if (type === "") {
      setFilteredShops(shops); // Show all shops for "All"
    } else {
      setFilteredShops(shops.filter((shop) => shop.type === type)); // Filter shops based on type
    }
  };

  return (
    <div>
      {/* Navbar Section */}
      <div className="Nav-1">
        <Navbar />
      </div>

      {/* Shop Cards Section */}
      <div className="Nav-2">
        <div className="Nav-3">
          <ParallelComponents onFilterChange={handleFilterChange}  />
        </div>
        {filteredShops.map((shop, index) => (
          isMobile ? (
            <MobileCard key={index} shop={shop} />
          ) : (
            <DesktopCard key={index} shop={shop} />
          )
        ))}
      </div>
    </div>
  );
}
