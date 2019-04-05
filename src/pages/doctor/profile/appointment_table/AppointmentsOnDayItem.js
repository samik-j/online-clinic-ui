import React from 'react';
import AppointmentInfoModal from "./appointment_information/AppointmentInfoModal";

const AppointmentsOnDayItem = ({appointment}) => {

    if (appointment.available === true) {
        return (
            <div className="appointment available" key={appointment.id}>
                <div>{appointment.time}</div>
            </div>);

    } else {
        return (
            <AppointmentInfoModal appointment={appointment}/>
        );
    }
};

export default AppointmentsOnDayItem;