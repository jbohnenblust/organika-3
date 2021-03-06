import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    
    render() { 
        return (  
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(22, 94, 106)"}}>
            <Link className="navbar-brand" to="/">My Site</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">Catalog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}
 
export default NavBar;