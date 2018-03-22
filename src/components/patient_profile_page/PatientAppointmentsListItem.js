import React from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const PatientAppointmentsListItem = ({appointment}) => {

    const item =
        <div>
            <td className="date">{moment(appointment.date).format('ddd DD.MM.YYYY')}</td>
            <td className="time">{appointment.time}</td>
            <td className="doctor"><Link to={`/doctors/${appointment.doctorId}`}>{appointment.doctorId}</Link></td>
            <td className="reason">{appointment.reason}</td>
        </div>

    var imgSrc = ''
    var style = ''
    var status = ''
    if (appointment.status === 'CANCELLED') {
        imgSrc = '/img/status_cancelled.png'
        style = "status cancelled"
        status = 'Cancelled'
    } else if (appointment.status === 'NOT_CONFIRMED'){
        imgSrc = '/img/status_not_confirmed.png'
        style = "status not-confirmed"
        status = 'Not Confirmed'
    } else if (appointment.status === 'CONFIRMED'){
        imgSrc = '/img/status_confirmed.png'
        style = "status confirmed"
        status = 'Confirmed'
    }

    return (
        <div className="appointment">
        <table id="appointment">
            <tr>
                <td className="date">{moment(appointment.date).format('ddd DD.MM.YYYY')}</td>
                <td className="time">{appointment.time}</td>
                <td className="doctor"><Link to={`/doctors/${appointment.doctorId}`}>{appointment.doctorId}</Link></td>
                <td className="reason">{appointment.reason}</td>
                <td className={style}>{status}</td>
                <td className="status-img"><img className="status-img" src={imgSrc} alt="status"/></td>
            </tr>
        </table>
        </div>
    )
}

export default PatientAppointmentsListItem