import React from 'react'
import { Link } from 'react-router-dom'

function AsideComponent() {
  return (
    <React.Fragment>
        <aside id="sidebar" className="sidebar">
              <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                  <Link className="nav-link " to="/admin">
                    <i className="bi bi-grid" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/users">
                    <i className="bi bi-people" />
                    <span>Usesr</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link collapsed" data-bs-target="#components-news" data-bs-toggle="collapse" to="#">
                    <i className="bi bi-menu-button-wide" /><span>News</span><i className="bi bi-chevron-down ms-auto" />
                  </Link>
                  <ul id="components-news" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                      <Link to="/admin/manage-category">
                        <i className="bi bi-circle" /><span>Manage Category</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/add-news">
                        <i className="bi bi-circle" /><span>Add News</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/show-news">
                        <i className="bi bi-circle" /><span>Show News</span>
                      </Link>
                    </li>
                    </ul>
                </li>            
                
              </ul>
            </aside>
    </React.Fragment>
  )
}

export default AsideComponent
