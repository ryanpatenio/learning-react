import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../../assets/navbar.css';

const NavBar = () => {
    
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/About', label: 'About' },
        { path: '/Cars', label: 'Cars'},
        { path: '/Contact', label: 'Contact' },    
      ];

    const location = useLocation(); // for static navigation
    const dropdownPath = ['/action','/another','/something'];

    const isDropdownActive = dropdownPath.includes(location.pathname);

  return (
    <>  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">To Do</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-4 justify-content-center justify-content-lg-start">
                {navLinks.map((link) => (
                   <li className="nav-item" key={link.path}>
                    <NavLink 
                        to={link.path}
                        className={({ isActive }) => 
                        isActive ? 'nav-link custom-active' : 'nav-link'
                        }
                        aria-current={({ isActive }) => isActive ? 'page' : undefined}
                    >
                        {link.label}
                    </NavLink>
                    </li>
                 ))}

                    <li className={`nav-item dropdown ${isDropdownActive ? 'custom-active' : ''}`}>
                        <a className={`nav-link dropdown-toggle ${isDropdownActive ? 'custom-active' : ''}`}
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                        Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NavLink 
                                    to="/action" 
                                    className={({ isActive }) => 
                                        `dropdown-item ${isActive ? 'active' : ''}`
                                    }
                                    >
                                    Action
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/another" 
                                    className={({ isActive }) => 
                                        `dropdown-item ${isActive ? 'active' : ''}`
                                    }
                                    >
                                    Another action
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/something" 
                                    className={({ isActive }) => 
                                        `dropdown-item ${isActive ? 'active' : ''}`
                                    }
                                    >
                                    Something else
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                   
                </ul>
                <form className="d-flex" noValidate>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar