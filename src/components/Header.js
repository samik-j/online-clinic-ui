import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="page-width">
                <Link to="/">
            <img className="logo"
                 src={"/img/caduceus2.png"}
                 alt="Caduceus"/>

                <div className="text">Online Clinic</div>
                </Link>
            </div>
        </header>
    )
};

export default Header;