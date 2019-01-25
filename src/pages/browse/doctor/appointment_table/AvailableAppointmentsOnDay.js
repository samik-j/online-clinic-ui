import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {DOCTORS_URL} from "../../../../urls";

class AvailableAppointmentsOnDay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            appointments: []
        };
    }

    componentDidMount () {
        const DOCTOR_ID = this.props.doctorId;
        const DATE_URL = moment(this.props.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?available=true&date=${DATE_URL}`)
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

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?available=true&date=${DATE_URL}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

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
                            <div key={appointment.id}>
                                <Link className="btn btn-outline-primary appointment"
                                      to={`/doctors/${this.props.doctorId}/book-appointment/${appointment.id}`}>
                                    {appointment.time}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default AvailableAppointmentsOnDay;