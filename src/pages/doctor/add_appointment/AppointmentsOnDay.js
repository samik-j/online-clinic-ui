import React from 'react';
import axios from 'axios/index';

import {DOCTORS_URL} from "../../../urls";
import moment from "moment/moment";
import AppointmentsOnDayItem from "./AppointmentsOnDayItem";

class AppointmentsOnDay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            appointments:[]
        };
    }

    componentDidMount () {
        const DOCTOR_ID = this.props.doctorId;
        const DATE_URL = moment(this.props.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?date=${DATE_URL}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

    componentWillReceiveProps () {
        const DOCTOR_ID = this.props.doctorId;
        const DATE_URL = moment(this.props.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?date=${DATE_URL}`)
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
            <div className="doctor-info">
                {this.state.appointments.map(appointment => {
                    return (
                        <AppointmentsOnDayItem key={appointment.id} appointment={appointment}/>
                    );
                })}
            </div>

        );
    }
}

export default AppointmentsOnDay;