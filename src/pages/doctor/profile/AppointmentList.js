import React from 'react';
import axios from 'axios/index';

import AppointmentsListItem from './AppointmentsListItem';

import {APPOINTMENTS_BOOKED_URL} from "../../../urls";

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
                            <AppointmentsListItem key={appointment.id} appointment={appointment}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default DoctorAppointmentsList;