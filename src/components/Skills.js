import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Skills extends Component {
  render() {
    return (
      <section className="skills py-5" id="skills">
            <div className="container">
                <div className="row mb-5">
                    <div className="col d-flex flex-wrap text-uppercase justify-content-center">
                        <h1 className="font-weight-bold align-self-center mx-1">why choose</h1>
                        <h1 className="section-title--special mx-1">car dealer</h1>
                    </div>
                </div>  
                 <div className="row">
                    <div className="col-sm-6 col-lg-3 text-center my-3">
                        <Link to="" className="skills-icon p-2 rounded-circle">
                            <i className="fas fa-car fa-fw"></i>
                        </Link>
                        <h6 className="text-uppercase font-weight-bold my-3">all brands</h6>
                        <div className="skills-underline"></div>
                            <p className="w-75 mx-auto text-muted">lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam!</p>
                    </div>
                    <div className="col-sm-6 col-lg-3 text-center my-3">
                        <Link to="" className="skills-icon p-2 rounded-circle">
                            <i className="fas fa-comments fa-fw"></i>
                        </Link>
                        <h6 className="text-uppercase font-weight-bold my-3">free support</h6>
                        <div className="skills-underline"></div>
                            <p className="w-75 mx-auto text-muted">lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam!</p>
                    </div>
                    <div className="col-sm-6 col-lg-3 text-center my-3">
                        <Link to="" className="skills-icon p-2 rounded-circle">
                            <i className="fas fa-people-carry fa-fw"></i>
                        </Link>
                        <h6 className="text-uppercase font-weight-bold my-3">caring</h6>
                        <div className="skills-underline"></div>
                            <p className="w-75 mx-auto text-muted">lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam!</p>
                    </div>
                    <div className="col-sm-6 col-lg-3 text-center my-3">
                        <Link to="" className="skills-icon p-2 rounded-circle">
                            <i className="fas fa-wallet fa-fw"></i>
                        </Link>
                        <h6 className="text-uppercase font-weight-bold my-3">affordable</h6>
                        <div className="skills-underline"></div>
                            <p className="w-75 mx-auto text-muted">lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam!</p>
                    </div>
                 </div>      
            </div>
      </section>
    );
  }
}
export default Skills;
