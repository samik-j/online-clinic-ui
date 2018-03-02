import React from 'react';

const Doctor = ({doctor}) => {

    return (
        <div className="doctor">
            <div>
            <div className="doctorName">{doctor.firstName}</div>
            <div className="doctorName">{doctor.lastName}</div>
            </div>
            <div>{doctor.specialty}</div>
        </div>
    )
};

export default Doctor;