import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
  const isLogIn=localStorage.getItem('token') ?? false;

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MERN3PM</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              
              {isLogIn ? (<div>
                <li className="nav-item">
                <Link className="nav-link" to="/admin">Dashboard</Link>
              </li>
              </div>) : <React.Fragment>
                
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
                </React.Fragment>}
            
            </ul>
              
          </div>
        </div>
      </nav>
            </div>
        </div>
      
    </div>
  )
}

export default HeaderComponent
