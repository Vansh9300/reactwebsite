import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import $ from 'jquery'
const Navbar = () => {
    function off(){
        console.log("you clikced")
        var navbarNav=document.querySelector("#navbarres");
        var body=document.querySelector("body");
          navbarNav.classList.add("off");
          body.classList.add("flow");
          navbarNav.classList.remove("flow");
    }
    function closeoff(){
        var navbarNav=document.querySelector("#navbarres");
        var body=document.querySelector("body");
        navbarNav.classList.remove("off");
        navbarNav.classList.add("animate");
        body.classList.remove("flow");
    }
    const closeoff2=(id)=>{
      localStorage.setItem('category',id)
      var navbarNav=document.querySelector("#navbarres");
      var body=document.querySelector("body");
      navbarNav.classList.remove("off");
      navbarNav.classList.add("animate");
      body.classList.remove("flow");
    }
  return (
    <>
   <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-none " id="navlight">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CodersWear</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarres" aria-controls="navbarres" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="toggle" onClick={off}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarres">
            <span className="close-btn" onClick={closeoff}><i className="fa-solid fa-xmark"></i></span>
            <ul className="navbar-nav" id="menu">
              <li className="nav-item"  onClick={()=> closeoff2('tshirt')}>
                <Link className="nav-link" to="/product">Tshirt</Link>
              </li>
              <li className="nav-item" onClick={()=> closeoff2('shirt')}>
                <Link className="nav-link" to="/product">Shirt</Link>
              </li>
              <li className="nav-item" onClick={()=> closeoff2('mug')}>
                <Link className="nav-link" to="/product">Mug</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
    </>
  )
}

export default Navbar