import React, { Component } from 'react';

import logo from '../img/icon.png';
import { Link } from 'react-router-dom';

 class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg px-3" id="navBar">
            <a href="#nav" className="navbar-brand">
                <img src={logo} alt="store" className="logo" /> 
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-icon">
                    <i className="fas fa-bars"></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="myNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link to="#navbar" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#skills" className="nav-link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#inventory" className="nav-link">Inventory</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="#features" className="nav-link">Features</Link>
                    </li>
                </ul>
                <div className="nav-icons d-none d-lg-block">
                    <Link to="#Fa" className="nav-icon">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="#Twi" className="nav-icon">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#In" className="nav-icon">
                        <i className="fab fa-instagram"></i>
                    </Link>
                </div>
            </div>
      </nav>

    )
  }
}

export default Navbar;
