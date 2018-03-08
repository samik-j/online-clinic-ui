import React from 'react';
import {Link} from 'react-router-dom';

const DoctorListItem = ({doctor}) => {

    return (
        <div className="doctor">
            <img className="doctorListAvatar"
                 src={"https://image.freepik.com/free-icon/medical-doctor-specialist_318-61706.jpg"}
                 alt="Doctor"/>
            <div className="doctorListInfo">
                <Link to={`/doctors/${doctor.id}/appointments`}>
                    <div className="doctorName">{doctor.firstName}</div>
                    <div className="doctorName">{doctor.lastName}</div>
                </Link>
                <div>{doctor.specialty}</div>
            </div>
        </div>
    )
};

export default DoctorListItem;