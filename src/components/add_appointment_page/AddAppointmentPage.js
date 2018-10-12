import React from 'react';
import moment from 'moment';
import axios from 'axios';

const URL = 'http://localhost:8080/doctors';

class AddAppointmentPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            date: this.props.match.params.date,
            hour: '',
            minutes: '',
            status: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit (event) {
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
    }

    hourDropdown = () => {
        return (
            <div className="time-input">
                <select id="hour" name="hour" className="form-control dropdown"
                        value={this.state.hour} onChange={this.handleHourChange}>
                    {this.getOptions(24, 1)}
                </select>
            </div>
        );
    };

    minutesDropdown = () => {
        return (
            <div className="time-input">
                <select id="minutes" name="minutes" className="form-control dropdown"
                        value={this.state.minutes} onChange={this.handleMinutesChange}>
                    {this.getOptions(60, 5)}
                </select>
            </div>
        );
    };

    getOptions = (range, increment) => {
        let options =[];
        options.push(<option hidden value=""></option>);
        for (let i = 0; i < range && i < 10; i += increment) {
            options.push(<option value={"0" + i} key={i}>0{i}</option>);
        }
        for (let i = 10; i < range; i += increment) {
            options.push(<option value={i} key={i}>{i}</option>);
        }

        return options;
    };

    render () {
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
                                        {this.hourDropdown()}
                                        :
                                        {this.minutesDropdown()}
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