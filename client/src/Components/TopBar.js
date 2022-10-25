import React, { Component } from 'react';
import logowhite from '../Image/logo-white-1.svg'
import profileImage from '../Image/testimonials/ts-1.jpg'
import logo from '../Image/logo.png'
class TopBar extends Component {
    render() {
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-transparent shaddow">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span> 
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand nav-link" href="#"><img src={logo} className="logo" />Rent N Go</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Contacts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Log In</a>
      </li> <li class="nav-item">
      
      </li>
    </ul>
  <ul className=' navbar-nav'>
    <li class="nav-item">
    <a class="nav-link " href="#">Log In</a>

    </li>
    <li class="nav-item">
    <a class="nav-link " href="#">Sign Up</a>

    </li>
  </ul>

   
  </div>
</nav>
        );
    }
}

export default TopBar;
