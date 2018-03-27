import React from 'react';
import axios from 'axios/index';
import DoctorAppointmentsListItem from './DoctorAppointmentsListItem';

const APPOINTMENTS_BOOKED_URL = 'http://localhost:8080/appointmentsBooked';

class DoctorAppointmentsList extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
            current: props.current,
            appointments: []
        };
    }

    componentDidMount () {
        const doctorId = this.state.doctorId;
        const current = this.state.current;

        axios.get(`${APPOINTMENTS_BOOKED_URL}?current=${current}&doctorId=${doctorId}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

    render () {
        return (
            <div className="appointment-list">
                {
                    this.state.appointments.map((appointment) => {
                        return (
                            <DoctorAppointmentsListItem key={appointment.id} appointment={appointment}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default DoctorAppointmentsList;