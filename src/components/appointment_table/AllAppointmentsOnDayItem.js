import React from 'react';

const AllAppointmentsOnDayItem = ({appointment}) => {

    if (appointment.available === true) {
        return (
            <div className="appointment available" key={appointment.id}>
                <div>{appointment.time}</div>
            </div>);

    } else {
        return (
            <div className="appointment not-available" key={appointment.id}>
                <div>{appointment.time}</div>
            </div>
        );
    }
};

export default AllAppointmentsOnDayItem;