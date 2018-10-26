import React from 'react';

const Notification = ({responseStatus, successMessage, failMessage}) => {

    if (responseStatus === '') {
        return (
            <p className="notification"></p>
        );
    } else if (responseStatus === 'success') {
        return (
            <p className="notification">{successMessage}</p>
        );
    } else if (responseStatus === 'fail') {
        return (
            <p className="notification">{failMessage}</p>
        );
    }

};

export default Notification;