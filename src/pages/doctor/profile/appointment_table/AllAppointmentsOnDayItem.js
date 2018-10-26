import React from 'react';

const AllAppointmentsOnDayItem = ({appointment, appointmentId}) => {

    const sendAppointmentId = () => {
        appointmentId(appointment.id);
    };

    if (appointment.available === true) {
        return (
            <div className="appointment available" key={appointment.id}>
                <div>{appointment.time}</div>
            </div>);

    } else {
        return (
            <button className="appointment not-available" key={appointment.id} onClick={sendAppointmentId}>
                <div>{appointment.time}</div>
            </button>
        );
    }
};

export default AllAppointmentsOnDayItem;