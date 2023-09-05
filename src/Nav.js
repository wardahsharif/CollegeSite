import React from 'react';
import "./Nav.css";
const Nav = () => {
    return (
<div className="Nav">
   {/*navbar start */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://i.pinimg.com/736x/5f/7a/ff/5f7aff7fcf3ebcfaf8038b480a5b51c8.jpg" width="100px"/>IST College</a>
   {/*hamburger menu for smaller screen */}
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarBasic">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          Home 
        </li>
        <li className="nav-item">
          About
        </li>
        <li className="nav-item">
          Courses
        </li>
         <li className="nav-item">
          Staff 
        </li>
         <li className="nav-item">
          Blog
        </li>
         <li className="nav-item">
          Contact 
        </li>
    
      </ul>

      {/*search input */}
       <form>
              <input type="text" placeholder="Search" className="rounded border-1 m-1 p-1" />
              <input type="submit" value="Search" className="btn btn-dark "/>
            </form>
      
    </div>
  </div>
</nav>

</div>
    )
    
};

export default Nav;

 