import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/about.css"



const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" style={{backgroundColor:'transparent'}}>
          <Link className="navbar-brand" to="/">News Hunt</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li><Link className="nav-link" to="/business">Business</Link ></li>
              <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li><Link className="nav-link" to="/">General</Link></li>
              <li><Link className="nav-link" to="/science">Science</Link></li>
              <li><Link className="nav-link" to="/health">Health</Link></li>
              <li><Link className="nav-link" to="/sports">Sports</Link></li>
              <li><Link className="nav-link" to="/technology">Technology</Link></li>
              {/* <li className="nav-item dropdown">
                           <Link  className="nav-link dr    opdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link >
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" to="#">Action</Link ></li>
                              <li><a className="dropdown-item" to="#">Another action</Link ></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><a className="dropdown-item" to="#">Something else here</Link ></li>
                            </ul>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link disabled">Disabled</Link >
                          </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar
