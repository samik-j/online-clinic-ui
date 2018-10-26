import React from 'react';

const Information = ({doctor}) => {

    return (
        <div>
            <img className="avatar"
                 src={'/img/doctor_avatar.jpg'}
                 alt="Doctor"/>
            <div className="info">
                <div className="name">{doctor.firstName}&nbsp;{doctor.lastName}</div>
                <table id="profile-info">
                    <colgroup>
                        <col className="title"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>Specialty</th>
                        <td>{doctor.specialty}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{doctor.email}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;