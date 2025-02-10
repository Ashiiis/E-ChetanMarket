import React, { useState, useEffect, useRef } from "react";
import { TaskProvider} from "../GoodToHave/CheckList/TaskContext";
import cardData from "./data"; // Assuming the file is named data.js
import "./Desktop2.css"; // Importing the CSS file for styling
import Navbar from "../Navbar/DesktopNav";
import ParallelComponents from "../GoodToHave/Good";
import Checklist from "../GoodToHave/CheckList/Checklist";
import drop from "/src/assets/drop.svg"
const CardComponent = () => {
  const [isListVisible, setListVisible] = useState(false);
  const listRef = useRef(null); // Ref to track the List component

  // Toggle the List visibility
  const toggleList = () => {
    setListVisible((prev) => !prev);
  };

  // Close the List when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="home">
      <div className="nav">
        <TaskProvider>
        <Navbar toggleList={toggleList} />
        </TaskProvider>
      
      {isListVisible && (
        <div
          ref={listRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            borderRadius: "8px",
            zIndex: 1000,
          }}
        >
          
        </div>
      )}
      </div>
      <div className="good-to-have">
        <ParallelComponents />
      </div>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            {/* Header Section */}
            <div className="card-header">
              <div className="card-title">
                <p2 className="card-name">{card.name}</p2>
                <p2 className="card-location">{card.location}</p2>
              </div>
              
            </div>
            {/* Image Section */}
            <div className="card-image">
              <img src={card.image} alt={card.name} className="card-img" />
            </div>

            {/* Description Section */}
            <div className="card-body">
              <p className="card-description">{card.description}</p>
              <p className="card-contact">
              <div className="dropdown">
                <button className="dropbtn"> <img src={drop} alt="Icon" /></button>
                <div className="dropdown-content">
                  <a><strong>Contact:</strong> {card.contact}</a>
                  <a></a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
