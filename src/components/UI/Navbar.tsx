import React, { CSSProperties } from 'react'
import {NavLink, Route, Routes} from "react-router-dom" ;
import "./Navbar.css"
import Main from '../Main/Main';
import Index from '../Main';
import { Show } from '../Main/Main';
interface propTypes {
    isActive:boolean
}

const Navbar = ({showModal} : Show) => {
    
    const NavLinkStyle = ({isActive}:propTypes):CSSProperties =>{
        return {
            fontWeight:isActive ? "bolder" : "normal" ,
            backgroundColor:isActive? "#FF9D55" : "transparent"
        }
    }
    
  return (
    <section className='navbar-container'>
        <NavLink className="logo" to="/">
            <img src="/assets/Logo.svg" alt="Logo" />
            <h1>HoRus</h1>
        </NavLink>
        <nav className="links">
            <NavLink style={NavLinkStyle}  to="/">
                Home
            </NavLink>
            <NavLink to="Trips">
                Trips
            </NavLink>
            <NavLink to="Alter">
                Alter
            </NavLink>
            <NavLink to="Reviews">
                Reviews
            </NavLink>
           
            <NavLink to="#" onClick={showModal}>
               sign in
            </NavLink>
        </nav>
        
    </section>
  )
}

export default Navbar
