import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import img from "../../img/flat-people-asking-questions-illustration_23-2148910627.jpeg";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="ill-img" src={img} alt=""/>
            </Link>
            <h1 className="wavy">
                <span>Let's</span>
                <span>Start</span>
                <span>The</span>
                <span>Quiz!</span>
            </h1>
        </div>
    );
}

export default Header;