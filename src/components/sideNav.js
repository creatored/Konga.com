import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
const sideNav = () => {
    return (
        <div className="sideNav">
            <div className="side-navbar-head">
                <header>Login</header>
                <div className="close"> 
                <IoClose />  </div>
            </div>
        </div>
    );
}

export default sideNav;