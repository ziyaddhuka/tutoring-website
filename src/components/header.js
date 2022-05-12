import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './header.css';

function Header() {
    async function logoutUser(e) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = '/login'
    }
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-org">
            <a className="navbar-brand" href="#"><img src='/images/classroom.png' className="rounded mx-auto d-block"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tutors</a></li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Courses
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Designing</a>
                    <a className="dropdown-item" href="#">Mathematics</a>
                    <a className="dropdown-item" href="#">Science</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">More Courses</a>
                </div>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/accountSettings">Account Settings</a>
                    <a className="dropdown-item" href="#">Active Plans</a>
                    <a className="dropdown-item" href="/appointments">Appointments</a>
                    <a className="dropdown-item" href="#">Favorites</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item"  onClick={logoutUser} href="/login">Logout</a>
                    </div>
                </li>
            </ul>
            </div>
        </nav>);
    
}
 
export default Header;