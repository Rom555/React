import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return(
        <div className="container profile">
            <User 
                src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" 
                alt="man"
                name="HZ"/>
            <Palette/>
        </div>
    )
}

export default Profile;