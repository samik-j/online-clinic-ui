import React from 'react';

const Information = ({patient}) => {

    return (
        <div>
            <img className="avatar"
                 src={'/img/patient_avatar.jpg'}
                 alt="Patient"/>
            <div className="info">
                <div className="name">{patient.firstName}&nbsp;{patient.lastName}</div>
                <table id="profile-info">
                    <colgroup>
                        <col className="title"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <td>{patient.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{patient.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>NHS Number</th>
                        <td>{patient.nhsNumber}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;