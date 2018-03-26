import React from 'react';

const DoctorInformation = ({doctor}) => {

    return (
        <div>
            <img className="avatar"
                 src={'/img/doctor_avatar.jpg'}
                 alt="Doctor"/>
            <div className="info">
                <div className="name">{doctor.firstName}&nbsp;{doctor.lastName}</div>
                <table className="details">
                    <colgroup>
                        <col className="title"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>EMAIL</th>
                        <td>{doctor.email}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorInformation;