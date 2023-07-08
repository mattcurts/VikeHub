import React from "react";
//Base code borrowed from https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/
function NavBar(){

    return  <nav class="navbar">
    <div class="logo">VikeHub</div>

    <ul class="nav-links">
  

      <div class="menu">
  
        <li><a href="/">Uvic</a></li>
        <li><a href="/">Clubs</a></li>
        <li><a href="/">Student</a></li>
        <li><a href="/">Past</a></li>
      </div>
    </ul>
  </nav>
}

export default NavBar;