import React from 'react';

const Doctor = ({doctor}) => {

    return (
        <div className="doctor">
            <img className="doctorListAvatar"
                 src={"https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png"}/>
            <div className="doctorListInfo">
            <div className="doctorName">{doctor.firstName}</div>
            <div className="doctorName">{doctor.lastName}</div>
            <div>{doctor.specialty}</div>
            </div>
            <button class="btn btn-outline-primary" type="submit">Button</button>
        </div>
    )
};

export default Doctor;