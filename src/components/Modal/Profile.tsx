import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import {useContext }from 'react';
import { AccountContext } from '../store/ShowAccountContext';
const Profile = () => {
    const profileCtx = useContext(AccountContext);
  return (
    <div className="profile_overlay">
        <div className="info">
            <Link to="/account/view-profile/activityfeed" onClick={profileCtx.closeAccount} >View Profile</Link>
            <Link to="/account/accountinfo" className='account_info' onClick={profileCtx.closeAccount}>Account Info</Link>
            <Link to="#" onClick={profileCtx.closeAccount}>Sign Out</Link>
        </div>
    </div>
  )
}

export default Profile