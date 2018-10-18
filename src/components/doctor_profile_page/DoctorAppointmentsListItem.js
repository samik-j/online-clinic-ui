import React from 'react';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import AppointmentStatusIcon from '../AppointmentStatusIcon';

const DoctorAppointmentsListItem = ({appointment}) => {

    return (
        <div className="appointment">
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

DoctorAppointmentsListItem.propTypes = {
    appointment: PropTypes.object.isRequired
};

export default DoctorAppointmentsListItem;