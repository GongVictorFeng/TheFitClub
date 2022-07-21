import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
import {Link} from "react-scroll";
const Header = () => {
    return ( 
        <div className="header">
            <img src={Logo} alt=""  className="logo"/>
            <ul className="header-menu">
                <li>
                <Link to='Hero' spy={true} smooth={true}>Home</Link>
                </li>
                <li>
                <Link to='Programs' spy={true} smooth={true}>Programs</Link>
                </li>
                <li>
                    <Link to='Coaches' spy={true} smooth={true}>Coaches</Link>
                    </li>
                <li>
                    <Link to='Blogs' spy={true} smooth={true}>Blogs</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Header;