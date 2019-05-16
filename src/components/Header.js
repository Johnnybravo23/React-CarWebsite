import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
            <div className="container-fluid">
                <div className="row height-max align-items-center">
                    <div className="col col-md-9 ml-auto text-right pr-5">
                        <h5 className="text-heading d-inline-block p-2 text-uppercase">the all new</h5>
                        <h2 className="text-uppercase my-2 title">2019 mercedes-benz</h2>
                        <h3 className="text-uppercase">model name</h3>
                        <h6 className="text-capitalize">starts from</h6>
                        <h2>R60,000  
                            <Link to="" className="title-icon d-inline-block nx-2">
                                <i className="fas fa-play"></i>
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
      </header>
    );
  }
}

export default Header;
