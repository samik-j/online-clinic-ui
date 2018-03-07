import React from 'react';

const DoctorListItem = ({doctor}) => {

    return (
        <div className="doctor">
            <img className="doctorListAvatar" src={"https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png"}/>
            <div className="doctorListInfo">
            <div className="doctorName">{doctor.firstName}</div>
            <div className="doctorName">{doctor.lastName}</div>
                <div>{doctor.specialty}</div>
            </div>
        </div>
    )
};

export default DoctorListItem;