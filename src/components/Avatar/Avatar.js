import React from "react";

import avatar from "../../assets/icons8-test-account-96.png";

import  './Avatar.css' ;

const Avatar = () =>{
    return(
        <div>
            <img
            src={avatar}
            alt="Avatar"
            className="avatar"
            />
        </div>
    )
}

export default Avatar;