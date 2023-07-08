import React from "react";
import '../styles.css';
//Base code borrowed from https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/
function NavBar(){

    return ( <nav class="navbar">
    <div className="logo">VikeHub</div>

    <ul className="nav-links">
  

      <div className="menu">
  
        <li><a href="/">Uvic</a></li>
        <li><a href="/">Clubs</a></li>
        <li><a href="/">Student</a></li>
        <li><a href="/">Past</a></li>
      </div>
    </ul>
  </nav>)
}

export default NavBar;