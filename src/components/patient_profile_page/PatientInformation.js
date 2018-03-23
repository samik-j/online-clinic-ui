import React from 'react';

const PatientInformation = ({patient}) => {

    return (
        <div>
            <img className="avatar"
                 src={'/img/patient_avatar.jpg'}
                 alt="Patient"/>
            <div className="info">
                <div className="name">{patient.firstName}&nbsp;{patient.lastName}</div>
                <table className="details">
                    <colgroup>
                        <col className="title"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>EMAIL</th>
                        <td>{patient.email}</td>
                    </tr>
                    <tr>
                        <th>PHONE</th>
                        <td>{patient.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>NHS NUMBER</th>
                        <td>{patient.nhsNumber}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientInformation;