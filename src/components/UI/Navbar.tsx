import React, { CSSProperties , useContext} from 'react'
import {NavLink} from "react-router-dom" ;
import "./Navbar.css"
import { AccountContext } from '../store/ShowAccountContext';
// import { ModelContext } from '../store/ShowModelContext';


export interface propTypes {
    isActive:boolean
}

const Navbar = () => {
    
    const NavLinkStyle = ({isActive}:propTypes):CSSProperties =>{
        return {
            fontWeight:isActive ? "bolder" : "normal" ,
            backgroundColor:isActive? "#FF9D55" : "transparent" , 

        }
    }

    // const modalCtx= useContext(ModelContext);
    const profileCtx = useContext(AccountContext);
    

    const closeHandle = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        profileCtx.showAccount();
    }

  return (


    <section className='navbar-container'>
        <NavLink className="logo" to="/">
            <img src="/assets/Logo.svg" alt="Logo" />
            <h1>HoRus</h1>
        </NavLink>
        <nav className="links">
            <NavLink style={NavLinkStyle}  to="/home">
                Home
            </NavLink>
            <NavLink style={NavLinkStyle} to="/trips">
                Trips
            </NavLink>
            <NavLink style={NavLinkStyle} to="/alters">
                Alters
            </NavLink>
            <NavLink style={NavLinkStyle} to="/community">
                Community
            </NavLink>
            <NavLink style={NavLinkStyle} to="/reviews">
                Reviews
            </NavLink>
           
            {/* <NavLink style={NavLinkStyle} to="#" onClick={modalCtx.showModel}>
               sign in
            </NavLink> */}

            <NavLink style={NavLinkStyle}  to="/account" onClick={closeHandle}>
                Account
            </NavLink>

           
        </nav>
        
    </section>
  )
}

export default Navbar
