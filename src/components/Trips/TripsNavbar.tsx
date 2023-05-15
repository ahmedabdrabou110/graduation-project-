import React, { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import { propTypes } from './../UI/Navbar';
import "./TripsNavbar.css";
const TripsNavbar = () => {
    const NavLinkStyle = ({isActive}:propTypes):CSSProperties =>{
        return {
            fontWeight:isActive ? "bolder" : "normal" ,
            color:isActive? "#FF9D55" : "black" ,

        }
    }
  return (
    <>
        <nav className='navbar__account'>
        <NavLink style={NavLinkStyle} to="/trips/alltrips" >
            All Trips
        </NavLink>
        <NavLink style={NavLinkStyle} to="/trips/privatetrip">
            Private Trips
        </NavLink>

        <NavLink style={NavLinkStyle} to="/trips/publictrip">
            Public Trips
        </NavLink>

        <NavLink style={NavLinkStyle} to="/trips/saved">
            Saved
        </NavLink>
    </nav>
    </>
  )
}

export default TripsNavbar