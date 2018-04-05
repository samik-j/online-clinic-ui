import React from 'react';

class BookAppointmentPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            appointmentId: props.match.params.appointmentId,
        }
    }
    render () {
        return (
            <div>
                Book Appointment Page
                <br/>
                {this.state.appointmentId}
            </div>
        )
    }
}

export default BookAppointmentPage;