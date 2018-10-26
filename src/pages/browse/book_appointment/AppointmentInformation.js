import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const AppointmentInformation = ({appointment}) => {

    return (
        <div className="appointment-info">
            <img className="icon" src={'/img/calendar.svg'} alt="callendar"/>
            <div className="info">
                <div className="weekday">{moment(appointment.date).format('dddd')}</div>
                <div>{moment(appointment.date).format('DD MMMM YYYY')}</div>
                <div>{appointment.time}</div>
                <Link to={`/doctors/${appointment.doctorId}`} className="link">Choose other appointment</Link>
            </div>
        </div>
    );

};

export default AppointmentInformation;