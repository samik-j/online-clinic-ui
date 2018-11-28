import React from 'react';
import moment from 'moment';
import axios from 'axios';

import DropdownOptions from '../../../components/DropdownOptions';
import Notification from "../../../components/Notification";

import {DOCTORS_URL} from "../../../urls";
import AppointmentsOnDay from "./AppointmentsOnDay";

class AddAppointment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.match.params.date,
            hour: '',
            minutes: '',
            responseStatus: ''
        };
    }

    handleHourChange = (event) => {
        this.setState({
            hour: event.target.value,
            responseStatus: ''
        });
    };

    handleMinutesChange = (event) => {
        this.setState({
            minutes: event.target.value,
            responseStatus: ''
        });
    };

    handleSubmit = (event) => {
        let time = this.state.hour + ':' + this.state.minutes;

        axios.post(`${DOCTORS_URL}/${this.props.match.params.doctorId}/appointments`, {
            date: this.state.date,
            time: time,
        }).then(() => {
            this.setState({
                responseStatus: 'success'
            });
        }).catch(error => {
            this.setState({
                responseStatus: 'fail'
            });
        });

        event.preventDefault();
    };

    render() {
        return (
            <div className="page-width">
                <div className="flex">
                    <div className="border-box inline-box width-auto">
                        <div className="box-title">Add appointment</div>
                        <div className="add-appointment">
                            <div className="appointment-info">
                                <img className="icon" src={'/img/calendar.svg'} alt="calendar"/>
                                <div className="info">
                                    <div className="weekday">{moment(this.state.date).format('dddd')}</div>
                                    <div>{moment(this.state.date).format('DD MMMM YYYY')}</div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div>
                                            <DropdownOptions range={24} increment={1} onChange={this.handleHourChange}/>
                                            :
                                            <DropdownOptions range={60} increment={5}
                                                             onChange={this.handleMinutesChange}/>
                                        </div>
                                        <Notification responseStatus={this.state.responseStatus}
                                                      successMessage={"Appointment added " + this.state.hour + ":" + this.state.minutes}
                                                      failMessage={"Failed to add"}/>
                                        <input className="btn btn-primary" type="submit" value="Add"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-box inline-box width-400px">
                        <AppointmentsOnDay date={this.state.date} doctorId={this.props.match.params.doctorId}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointment;