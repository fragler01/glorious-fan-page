import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss'
import LogoFull from '../images/brand/4x/LogoFull.png'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {

    return (
        <div className="Header">
            <div className="logo">
                <Link to='/' className="link"><img src={LogoFull}></img></Link>
            </div>
            <div className="menus">
                <Link to='/' className="link">Home</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/switches' className="link">Switches</Link>
                <Link to='/contact' className="link">Contact</Link>
            </div>
            <div className="Hamburger">
                <GiHamburgerMenu></GiHamburgerMenu>
            </div>
        </div>
    )
}