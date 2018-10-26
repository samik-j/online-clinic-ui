import React from 'react';
import moment from 'moment/moment';

const ArrowRight = ({date, onClick}) => {

    if (date.isAfter(moment().add(5, 'months'))) {
        return (
            <img className="clickable arrows" src={'/img/arrows_right_inactive.png'} alt="Arrow Right"/>
        );
    } else {
        return <img className="clickable arrows" onClick={onClick} src={'/img/arrows_right.png'} alt="Arrow Right"/>
    }
};

export default ArrowRight;