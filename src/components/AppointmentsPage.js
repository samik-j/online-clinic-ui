import React from 'react';
import moment from 'moment/moment';
import axios from 'axios/index';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class AppointmentsPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
            appointments: []
        };
    }

    componentDidMount () {
        const doctorId = this.state.doctorId;

        axios.get(`${DOCTORS_URL}/${doctorId}/appointments?available=true`)
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
            <div>
                <div className="doctor-appointment-list">
                    {
                        this.state.appointments.map(appointment => {
                            return (
                                <div className="btn btn-default appointment-book-btn" key={appointment.id}>
                                    <div>{moment(appointment.date).format('DD.MM')}</div>
                                    <div>{appointment.time}</div>
                                </div>);
                        })
                    }
                </div>
            </div>
        );

    }
}

export default AppointmentsPage;