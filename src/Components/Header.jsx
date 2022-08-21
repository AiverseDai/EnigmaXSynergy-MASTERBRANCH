import {useState} from "react";
import Navbar from "./Navbar";
import bg from "../images/header-bg.png"
import mint from "./mint";
import RegisterPage from "./RegisterPage";

function Header(){
   const [show, setShow] = useState(false)
   return(
    <div className="header">
     <Navbar/>
     <img className="bg-img" src={bg}></img>
     <div className="intro">
        <p></p>
        <h1><span>T</span>he World's Premier Green Energy and Non Fungible Tokens</h1>
        <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla </p>
        <a href="#" onClick={() => setShow(true)} className="header-btn">Register</a>
        <RegisterPage show={show} setShow={setShow} />
     </div>
    </div>
   )
}
export default Header;