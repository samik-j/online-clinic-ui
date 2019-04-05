import React from 'react';
import moment from 'moment';
import AppointmentStatusIcon from "../../../../../components/AppointmentStatusIcon";

const AppointmentInformation = ({appointment}) => {

    let confirmButton = () => {
        if (appointment.status === "NOT_CONFIRMED") {
            return (
                <button className="btn btn-primary">
                    Confirm Appointment
                </button>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="appointment-info">
            <img className="icon" src={'/img/calendar.svg'} alt="callendar"/>
            <div className="info">
                <div className="weekday">{moment(appointment.date).format('dddd')}</div>
                <div>{moment(appointment.date).format('DD MMMM YYYY')}</div>
                <div>{appointment.time}</div>
                <div className="title">Status</div>
                <div className="status">
                    <AppointmentStatusIcon status={appointment.status}/>
                </div>
                <div className="title">Patient</div>
                <div className="patient">{appointment.patientName}</div>
                <div className="title">Reason</div>
                <div className="reason">{appointment.reason}</div>
                {confirmButton()}
            </div>
        </div>
    );

};

export default AppointmentInformation;