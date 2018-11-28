import React from 'react';

const AppointmentsOnDayItem = ({appointment}) => {

    if (appointment.available === true) {
        return (
            <div className="appointment available" key={appointment.id}>
                <div>{appointment.time}</div>
            </div>);

    } else {
        return (
            <dic className="appointment not-available" key={appointment.id}>
                <div>{appointment.time}</div>
            </dic>
        );
    }
};

export default AppointmentsOnDayItem;