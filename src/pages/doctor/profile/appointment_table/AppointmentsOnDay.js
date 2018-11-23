import React from 'react';
import moment from 'moment/moment';
import axios from 'axios/index';

import { Link } from 'react-router-dom';
import AppointmentsOnDayItem from './AppointmentsOnDayItem';

import {DOCTORS_URL} from "../../../../urls";

class AppointmentsOnDay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
            date: props.date,
            appointments: [],
            currentAppointmentId: ''
        };
    }

    componentDidMount () {
        const DOCTOR_ID = this.state.doctorId;
        const DATE_URL = moment(this.state.date).format('YYYY-MM-DD');

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
        const DOCTOR_ID = this.state.doctorId;
        const DATE_URL = moment(this.state.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?date=${DATE_URL}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

    showDetails = (event) => {
        this.setState({
            currentAppointmentId: event
        });

        this.props.details(event);
    };

    isOnWeekend = () => {
        return moment(this.state.date).day() === 6 || moment(this.state.date).day() === 0;
    };

    render () {
        let dayStyle = this.isOnWeekend() ? 'weekend' : 'weekday';

        return (
            <div className="appointments-on-day">
                <div className="date">
                    <div>{moment(this.state.date).format('DD.MM')}</div>
                    <div>{moment(this.state.date).format('ddd')}</div>
                </div>
                <div className={dayStyle}>
                    {this.state.appointments.map(appointment => {
                        return (
                            <AppointmentsOnDayItem key={appointment.id} appointment={appointment}
                                                   appointmentId={(appointmentId) => this.showDetails(appointmentId)}/>
                        );
                    })}
                </div>
                <Link
                    to={`/profiles/doctors/${this.state.doctorId}/add-appointment/${moment(this.state.date).format('YYYY-MM-DD')}`}>
                    <img className="clickable add-btn" src={'/img/add.svg'} alt="add"/>
                </Link>
            </div>
        );
    }
}

export default AppointmentsOnDay;