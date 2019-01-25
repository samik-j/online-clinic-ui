import React from 'react';

const AppointmentsOnDayItem = ({appointment}) => {

    if (appointment.available === true) {
        return (
            <div className="appointment available" key={appointment.id}>
                <div>{appointment.time}</div>
            </div>);

    } else {
        return (
            <button className="appointment not-available" key={appointment.id}>
                <div>{appointment.time}</div>
            </button>
        );
    }
};

export default AppointmentsOnDayItem;