import React from 'react';
import moment from 'moment/moment';

const LeftArrow = ({date, click}) => {

    if (date.dayOfYear() === moment().dayOfYear()) {
        return (
            <img className="clickable arrows" src={'/img/arrows_left_inactive.png'} alt="Arrows Left"/>
        );
    } else {
        return <img className="clickable arrows" onClick={click} src={'/img/arrows_left.png'} alt="Arrows Left"/>;
    }
};

export default LeftArrow;