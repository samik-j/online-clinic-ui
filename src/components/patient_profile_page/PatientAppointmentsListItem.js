import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import AppointmentStatusIcon from '../AppointmentStatusIcon';

const PatientAppointmentsListItem = ({appointment}) => {

    return (
        <div className="appointment">
            <table id="profile-appointment">
                <tbody>
                <tr>
                    <td className="date">{moment(appointment.date).format('ddd DD.MM.YYYY')}</td>
                    <td className="time">{appointment.time}</td>
                    <td className="doctor"><Link to={`/doctors/${appointment.doctorId}`}>{appointment.doctorName}</Link>
                    </td>
                    <td className="reason">{appointment.reason}</td>
                    <td className="status-symbol"><AppointmentStatusIcon status={appointment.status}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

PatientAppointmentsListItem.propTypes = {
    appointment: PropTypes.object.isRequired
};

export default PatientAppointmentsListItem;