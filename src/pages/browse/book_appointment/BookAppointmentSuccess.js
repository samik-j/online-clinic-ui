import React from 'react';
import axios from 'axios/index';
import moment from 'moment/moment';

import {APPOINTMENTS_BOOKED_URL} from "../../../urls";

class BookAppointmentSuccess extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            appointmentBooked: ''
        };
    }

    componentDidMount () {
        axios.get(`${APPOINTMENTS_BOOKED_URL}/${this.props.match.params.appointmentId}`)
            .then(
                response => {
                    this.setState({
                        appointmentBooked: response.data
                    });
                }
            );
    }

    render () {
        return (
            <div className="bg">
                <div className="page-width">
                    <div className="border-box">
                        <div className="appointment-info">
                            <img className="icon" src={'/img/calendar.svg'} alt="callendar"/>
                            <div className="info">
                                <div className="weekday">{moment(this.state.appointmentBooked.date).format('dddd')}</div>
                                <div>{moment(this.state.appointmentBooked.date).format('DD MMMM YYYY')}</div>
                                <div>{this.state.appointmentBooked.time}</div>
                                <div>{this.state.appointmentBooked.patientName}</div>
                                <div>{this.state.appointmentBooked.reason}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookAppointmentSuccess;