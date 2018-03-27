import React from 'react';

const AppointmentStatusIcon = ({status}) => {

    if (status === 'CANCELLED') {
        return (
            <img src={'/img/status_cancelled.svg'} alt="status_cancelled"/>
        );
    } else if (status === 'NOT_CONFIRMED') {
        return (
            <img src={'/img/status_not_confirmed.svg'} alt="status_not_confirmed"/>
        );

    } else if (status === 'CONFIRMED') {
        return (
            <img src={'/img/status_confirmed.svg'} alt="status_confirmed"/>
        );
    }
};

export default AppointmentStatusIcon;