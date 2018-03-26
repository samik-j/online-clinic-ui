import React from 'react';
import moment from 'moment/moment';
import axios from 'axios/index';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class AppointmentsOnDay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
            date: props.date,
            appointments: []
        };
    }

    componentDidMount () {
        const DOCTOR_ID = this.state.doctorId;
        const DATE_URL = moment(this.state.date).format('YYYY-MM-DD');

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
        const DOCTOR_ID = this.state.doctorId;
        const DATE_URL = moment(this.state.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?available=true&date=${DATE_URL}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

    render () {
        return (
            <div className="appointments-on-day">
                <div className="title">{moment(this.state.date).format('DD.MM')}</div>
                <div className="title">{moment(this.state.date).format('ddd')}</div>
                <div className="item">
                    {this.state.appointments.map(appointment => {
                        return (
                            <div className="btn btn-default book-btn" key={appointment.id}>
                                <div>{appointment.time}</div>
                            </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default AppointmentsOnDay;