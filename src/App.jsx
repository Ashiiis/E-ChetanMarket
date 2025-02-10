import React, { useState, useEffect } from "react";
import CardComponent from "./components/Card/Desktop2";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChatPage from "./components/Chat/Chat";
import Page1 from "./components/Administration/page1";
import UserDetail from "./components/Administration/UserDetails";
import UserList from "./components/Administration/userlist";
import "./App.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  

  useEffect(() => {
    // Timer to hide the splash screen after 3 seconds
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      <page1/>
       <Router>
      {showSplash ? (
        <div className="splash-screen">
          <h1>Welcome to The Mart</h1>
        </div>
      ) : (
        <Link to="/"></Link>
        // <RecipeCard/>
      )}
  {/* Links */}
      
    <Routes>
      
      <Route path="/" element={<CardComponent/>} />
      <Route path="/list" element={<UserList />} />
      <Route path="/Admin" element={<Page1/>}/>
      <Route path="/Chat" element={<ChatPage/>}/>
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="/add-user" element={<UserDetail />} />
    </Routes>
  </Router>
    </div>
  );
};

export default App;
