import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../css/admin.css";
import AsideComponent from './AsideComponent';


export default function AdminRouteMiddelware() {
    let isLogin=localStorage.getItem('token') ? true : false;
    
    const logout = ()=>{
        localStorage.clear();
        window.location.href = '/login';
    }

    if(isLogin){
        return (
            <div>           
            <header id="header" className="header fixed-top d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <Link to="/admin" className="logo d-flex align-items-center">
                  <span className="d-none d-lg-block">Mern3pm</span>
                </Link>
                <i className="bi bi-list toggle-sidebar-btn" />
              </div>
              <div className="search-bar">
                <Link to="/">Visit website</Link>
              </div>
              <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                 
                  <li className="nav-item dropdown pe-3">
                    <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                      <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                      <span className="d-none d-md-block dropdown-toggle ps-2">Admin</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                      <li className="dropdown-header">
                        <h6>Role</h6>
                        <span>Admin</span>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item d-flex align-items-center" to="/admin/profile">
                          <i className="bi bi-person" />
                          <span>My Profile</span>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item d-flex align-items-center" to="/admin/setting">
                          <i className="bi bi-gear" />
                          <span>Account Settings</span>
                        </Link>
                      </li>
                      
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button className="dropdown-item d-flex align-items-center"
                        onClick={logout}
                        >
                          <i className="bi bi-box-arrow-right" />
                          <span>Sign Out</span>
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </header>
           <AsideComponent />
          
            <main id="main" className="main">
                <div className="container">
                    <Outlet />                   
                </div>
            </main>
            
            <footer id="footer" className="footer">
              <div className="copyright">
                © Copyright <strong><span>Mern3pm</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
                  Designed by <Link to="#">BootstrapMade</Link>
              </div>
            </footer>
            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>
          </div>
        ) 
    }else{
        window.location.href = '/login';
    }
  
}
