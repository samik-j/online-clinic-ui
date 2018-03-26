import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const PatientAppointmentsListItem = ({appointment}) => {

    let statusSymbol = '';

    if (appointment.status === 'CANCELLED') {
        statusSymbol = <img src={'/img/status_cancelled.svg'} alt="status_cancelled"/>;

    } else if (appointment.status === 'NOT_CONFIRMED') {
        statusSymbol = <img src={'/img/status_not_confirmed.svg'} alt="status_cancelled"/>;

    } else if (appointment.status === 'CONFIRMED') {
        statusSymbol = <img src={'/img/status_confirmed.svg'} alt="status_cancelled"/>;
    }

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
                    <td className="status-symbol">{statusSymbol}</td>
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