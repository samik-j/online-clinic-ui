import React from 'react';
import moment from 'moment';
import axios from 'axios';

import DropdownOptions from "../../../../components/DropdownOptions";
import Notification from "../../../../components/Notification";

import {DOCTORS_URL} from "../../../../urls";

class AddAppointment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hour: '',
            minutes: '',
            responseStatus: '',
            responseErrorMessage: ''
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

        axios.post(`${DOCTORS_URL}/${this.props.doctorId}/appointments`, {
            date: moment(this.props.date).format('YYYY-MM-DD'),
            time: time,
        }).then(() => {
            this.setState({
                responseStatus: 'success'
            });
        }).catch(error => {
            this.setState({
                responseStatus: 'fail',
                responseErrorMessage: error.response.data.validationErrors === undefined ? "" : error.response.data.validationErrors
            });
        });

         event.preventDefault()
    };

    render() {
        return (
            <div className="add-appointment">
                <div className="appointment-info">
                    <img className="icon" src={'/img/calendar.svg'} alt="calendar"/>
                    <div className="info">
                        <div className="weekday">{moment(this.props.date).format('dddd')}</div>
                        <div>{moment(this.props.date).format('DD MMMM YYYY')}</div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <DropdownOptions range={24} increment={1} onChange={this.handleHourChange}/>
                                :
                                <DropdownOptions range={60} increment={5}
                                                 onChange={this.handleMinutesChange}/>
                            </div>
                            <Notification responseStatus={this.state.responseStatus}
                                          successMessage={`Appointment added ${this.state.hour}:${this.state.minutes}`}
                                          failMessage={`Failed to add\n${this.state.responseErrorMessage}`}/>
                            <input className="btn btn-primary" type="submit" value="Add"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointment;