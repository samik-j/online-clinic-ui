import React from 'react';
import moment from 'moment/moment';
import AppointmentStatusIcon from '../../AppointmentStatusIcon';

const CurrentAppointmentBooked = ({appointment}) => {

    return (
        <div className="appointment-details">
            <table id="profile-appointment">
                <tbody>
                <tr>
                    <td className="date">{moment(appointment.date).format('ddd DD.MM.YYYY')}</td>
                    <td className="time">{appointment.time}</td>
                    <td className="doctor">{appointment.patientName}</td>
                    <td className="reason">{appointment.reason}</td>
                    <td className="status-symbol"><AppointmentStatusIcon status={appointment.responseStatus}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrentAppointmentBooked;