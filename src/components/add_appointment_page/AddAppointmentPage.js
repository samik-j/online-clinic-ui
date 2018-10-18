import React from 'react';
import moment from 'moment';
import axios from 'axios';
import DropdownOptions from './DropdownOptions';

const URL = 'http://localhost:8080/doctors';

class AddAppointmentPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.match.params.date,
            hour: '',
            minutes: '',
            status: ''
        };
    }

    handleHourChange = (event) => {
        this.setState({
            hour: event.target.value,
            status: ''
        });
    };

    handleMinutesChange = (event) => {
        this.setState({
            minutes: event.target.value,
            status: ''
        });
    };

    addedNotification = () => {
        if (this.state.status === '') {
            return (
                <p className="notification"></p>
            );
        } else if (this.state.status === 'success') {
            return (
                <p className="notification">
                    Appointment added {this.state.hour}:{this.state.minutes}
                </p>
            );
        } else if (this.state.status === 'fail') {
            return (
                <p className="notification">Failed to add</p>
            );
        }
    };

    handleSubmit = (event) => {
        let time = '' + this.state.hour + ':' + this.state.minutes;

        axios.post(`${URL}/${this.props.match.params.doctorId}/appointments`, {
            date: this.state.date,
            time: time,
        }).then(() => {
            this.setState({
                status: 'success'
            });
        }).catch(error => {
            this.setState({
                status: 'fail'
            });
        });

        event.preventDefault();
    };

    render() {
        return (
            <div className="page-width">
                <div className="border-box">
                    <div className="box-title">Add appointment</div>
                    <div className="add-appointment">
                        <div className="appointment-info">
                            <img className="icon"
                                 src={'/img/calendar.svg'}
                                 alt="calendar"/>
                            <div className="info">
                                <div className="weekday">{moment(this.state.date).format('dddd')}</div>
                                <div>{moment(this.state.date).format('DD MMMM YYYY')}</div>
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <DropdownOptions range={24} increment={1} onChange={this.handleHourChange}/>
                                        :
                                        <DropdownOptions range={60} increment={5} onChange={this.handleMinutesChange}/>
                                    </div>
                                    {this.addedNotification()}
                                    <input className="btn btn-primary" type="submit" value="Add"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointmentPage;