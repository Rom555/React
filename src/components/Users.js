import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" 
                alt="man" 
                name="HZ"/>
            <div className="users__block">
                <User 
                    src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" 
                    alt="man" 
                    name="HZ"
                    min/>
                <User 
                    src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" 
                    alt="man" 
                    name="HZ"
                    min/>
                <User 
                    src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" 
                    alt="man" 
                    name="HZ"
                    min/>
                <User 
                    src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" 
                    alt="man" 
                    name="HZ"
                    min/>
            </div>
        </div>
    )
}