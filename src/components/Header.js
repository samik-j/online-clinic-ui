import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="page-width">
                <Link to="/">
            <img className="logo inline"
                 src={"/img/caduceus2.png"}
                 alt="Caduceus"/>
                </Link>
                <div className="inline">Online Clinic</div>
            </div>
        </header>
    )
};

export default Header;