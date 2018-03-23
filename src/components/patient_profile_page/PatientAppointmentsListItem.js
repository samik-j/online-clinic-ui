import React from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const PatientAppointmentsListItem = ({appointment}) => {

    var status = ''
    var statusSymbol = ''

    if (appointment.status === 'CANCELLED') {
        status = 'Cancelled'
        statusSymbol =
            <svg fill="#c82424" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>

    } else if (appointment.status === 'NOT_CONFIRMED') {
        status = 'Not Confirmed'
        statusSymbol =
            <svg fill="#ffde00" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>

    } else if (appointment.status === 'CONFIRMED') {
        status = 'Confirmed'
        statusSymbol =
            <svg fill="#0e9700" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
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
                    <td className="status-symbol">{statusSymbol}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PatientAppointmentsListItem