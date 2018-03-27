import React from 'react';

class AddAppointmentPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            date: props.date
        }
    }

    render () {
        return (
            <div>Add Appointment</div>
        )
    }
}

export default AddAppointmentPage;