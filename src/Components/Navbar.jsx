import React from "react";
import logo from "../images/logo1.png"
import Login from "../Login";
import connectWallet from "./connectWallet.js";
import register from "./register";

function Navbar(){
   return(
    <nav>
        <a href="#" className="logo">
            <img src={logo} alt="logo"/>
        </a>
        <input className="menu-btn" type="checkbox" id='menu-btn'/>
        <label className="menu-icon" for='menu-btn'>
            <span className="nav-icon"></span>
        </label>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Whitepaper</a></li>
            <li><a href="#">Contact</a></li>
            <li><a onClick={register} href="#">Register</a></li>
            <li><a id="address" onClick={connectWallet} href="#">Connect Wallet</a></li>
        </ul>
    </nav>
   )
}
export default Navbar;