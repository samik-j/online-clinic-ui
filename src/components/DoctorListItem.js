import React from 'react';
import {Link} from 'react-router-dom';

const DoctorListItem = ({doctor}) => {

    return (
        <div className="doctor">
            <img className="doctor-list-avatar"
                 src={"https://image.freepik.com/free-icon/medical-doctor-specialist_318-61706.jpg"}
                 alt="Doctor"/>
            <div className="doctor-list-info">
                <Link to={`/doctors/${doctor.id}`}>
                    <div className="doctor-name">{doctor.firstName}</div>
                    <div className="doctor-name">{doctor.lastName}</div>
                </Link>
                <div>{doctor.specialty}</div>
            </div>
        </div>
    )
};

export default DoctorListItem;