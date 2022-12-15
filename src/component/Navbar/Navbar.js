import React from 'react';
import './Navbar.css'
import logo1 from'./Logo-Left.png'
import logo2 from'./Logo-top.png'
import logo3 from'./logo-right.png'
import logo4 from'./search.png'

const Navbar = () => {
    return (
        <div>
            <div className='d-flex top-nav'>
                <div className='nav-top'>
                    <img src={logo1} alt=""/>
                </div>
                <div className='nav-top'>
                <img src={logo2} alt=""/>
                </div>
                <div className='nav-top'>
                <img src={logo3} alt=""/>
                </div>
                <div className='nav-top'>
                <img src={logo4} alt=""/>
                </div>
               
            </div>
            
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Comics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Characters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">TV Show</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Game</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">More</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;