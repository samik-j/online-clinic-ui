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
                    <option hidden value=""></option>
                    <option value="00">0</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </select>
            </div>
        );
    };

    minutesDropdown = () => {
        return (
            <div className="time-input">
                <select id="minutes" name="minutes" className="form-control dropdown"
                        value={this.state.minutes} onChange={this.handleMinutesChange}>
                    <option hidden value=""></option>
                    <option value="00">00</option>
                    <option value="05">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                </select>
            </div>
        );
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