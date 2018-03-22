import React from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const PatientAppointmentsListItem = ({appointment}) => {

    var imgSrc = ''
    var status = ''

    if (appointment.status === 'CANCELLED') {
        imgSrc = '/img/status_cancelled.png'
        status = 'Cancelled'
    } else if (appointment.status === 'NOT_CONFIRMED') {
        imgSrc = '/img/status_not_confirmed.png'
        status = 'Not Confirmed'
    } else if (appointment.status === 'CONFIRMED') {
        imgSrc = '/img/status_confirmed.png'
        status = 'Confirmed'
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
                    <td className="status">{status}</td>
                    <td className="status-img"><img className="status-img" src={imgSrc} alt="status"/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PatientAppointmentsListItem