import React from "react";
import { Link } from "react-router-dom";
import '../components/Details.css'
export function Nav() {


  return (
    <>
      <nav class="navbar navbar-expand-lg container-fluid " id="navbar">
        <div class="container-fluid">
          <a className="navbar-brand text-dark" href="#"><h4>TV-Maze</h4></a>
          <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Show</a> */}
                <Link to="/" className="btn text-dark"><h6>Show</h6></Link>
              </li>
              <li class="nav-item">
                <Link to="nav" className="btn text-dark"><h6>people</h6></Link>
              </li>
              {/* <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li> */}
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}