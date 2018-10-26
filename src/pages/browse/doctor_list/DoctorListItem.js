import React from 'react';
import { Link } from 'react-router-dom';

const DoctorListItem = ({doctor}) => {

    return (
        <div className="border-box doctor-list">
            <img className="doctor-avatar"
                 src={'/img/doctor_avatar.jpg'}
                 alt="Doctor"/>
            <div className="doctor-info">
                <Link to={`/doctors/${doctor.id}`}>
                    <div className="doctor-name">{doctor.firstName}&nbsp;{doctor.lastName}</div>
                </Link>
                <div>{doctor.specialty}</div>
            </div>
        </div>
    );
};

export default DoctorListItem;