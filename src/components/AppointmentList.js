import React from 'react';

const AppointmentList = ({appointmentsAvailable}) => {

    return (
        <div>
            <div className="appointment-list">
                {
                    appointmentsAvailable.map(appointment => {
                        return (
                            <div className="btn btn-default appointment-book-btn" key={appointment.id}>
                                <div>{appointment.date}</div>
                                <div>{appointment.time}</div>
                            </div>)
                    })
                }
            </div>
        </div>
    )

};

export default AppointmentList;