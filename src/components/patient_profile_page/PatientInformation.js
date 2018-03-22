import React from 'react'

const PatientInformation = ({patient}) => {

    return (
        <div>
            <img className="avatar"
                 src={'/img/patient_avatar.jpg'}
                 alt="Patient"/>
            <div className="info">
                <div className="name">{patient.firstName}&nbsp;{patient.lastName}</div>
            </div>
        </div>
    )
}

export default PatientInformation