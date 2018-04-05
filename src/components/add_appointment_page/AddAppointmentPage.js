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
            minutes: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHourChange = (event) => {
        this.setState({
            hour: event.target.value
        });
    };

    handleMinutesChange = (event) => {
        this.setState({
            minutes: event.target.value
        });
    };

    handleSubmit (event) {
        let time = '' + this.state.hour + ':' + this.state.minutes;

        axios.post(`${URL}/${this.props.match.params.doctorId}/appointments`, {
            date: this.state.date,
            time: time,
        }).then(
            this.props.history.push(`/profiles/doctors/${this.props.match.params.doctorId}`)
        );

        event.preventDefault();
    }

    render () {
        return (
            <div className="page-width">
                <div className="border-box">
                    <div className="box-title">Add appointment</div>
                    <div className="add-appointment">
                        <div className="appointment-info">
                            <img className="icon"
                                 src={'/img/calendar.svg'}
                                 alt="callendar"/>
                            <div className="info">
                                <div className="weekday">{moment(this.state.date).format('dddd')}</div>
                                <div>{moment(this.state.date).format('DD MMMM YYYY')}</div>
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <div className="time-input">
                                            <input className="input" type="text" name="hour" value={this.state.hour}
                                                   onChange={this.handleHourChange}/>
                                        </div>
                                        :
                                        <div className="time-input">
                                            <input className="input" type="text" name="minutes"
                                                   value={this.state.minutes}
                                                   onChange={this.handleMinutesChange}/>
                                        </div>
                                    </div>
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