import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixtv">
                TV
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixsports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixcategory">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fundemo1">
                Fundemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
