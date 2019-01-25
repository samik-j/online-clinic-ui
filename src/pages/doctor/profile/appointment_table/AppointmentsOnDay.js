import React from 'react';
import moment from 'moment/moment';
import axios from 'axios/index';

import AppointmentsOnDayItem from './AppointmentsOnDayItem';
import AddAppointmentModal from "./AddAppointmentModal";

import {DOCTORS_URL} from "../../../../urls";

class AppointmentsOnDay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            appointments: [],
            currentAppointmentId: ''
        };
    }

    componentDidMount () {
        this.loadAppointments()
    }

    componentWillReceiveProps () {
        this.loadAppointments()
    }

    loadAppointments = () => {
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
    };

    showDetails = (event) => {
        this.setState({
            currentAppointmentId: event
        });

        this.props.details(event);
    };

    isOnWeekend = () => {
        return moment(this.props.date).day() === 6 || moment(this.props.date).day() === 0;
    };

    render () {
        let dayStyle = this.isOnWeekend() ? 'weekend' : 'weekday';

        return (
            <div className="appointments-on-day">
                <div className="date">
                    <div>{moment(this.props.date).format('DD.MM')}</div>
                    <div>{moment(this.props.date).format('ddd')}</div>
                </div>
                <div className={dayStyle}>
                    {this.state.appointments.map(appointment => {
                        return (
                            <AppointmentsOnDayItem key={appointment.id} appointment={appointment}
                                                   appointmentId={(appointmentId) => this.showDetails(appointmentId)}/>
                        );
                    })}
                </div>
                <AddAppointmentModal date={this.props.date} doctorId={this.props.doctorId} loadAppointments={this.loadAppointments}/>
            </div>
        );
    }
}

export default AppointmentsOnDay;