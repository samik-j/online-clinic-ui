import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="page-width home-text">
                <div>Search for a doctor and make an appointment online</div>
                <Link to={'/doctors'}>
                    <img className="search-icon" src={'/img/search-icon.png'} alt="Search"/>
                </Link>
            </div>
        </div>
    );
};

export default Home;