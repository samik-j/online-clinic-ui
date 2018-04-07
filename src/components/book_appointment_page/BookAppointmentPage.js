import React from 'react';
import axios from 'axios/index';

import AppointmentInformation from './AppointmentInformation';
import DoctorInformation from './DoctorInformation';

const DOCTORS_URL = 'http://localhost:8080/doctors';
const APPOINTMENTS_URL = 'http://localhost:8080/appointmentsBooked';

class BookAppointmentPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: this.props.match.params.doctorId,
            appointment: '',
            patientId: '',
            reason: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        axios.get(`${DOCTORS_URL}/${this.props.match.params.doctorId}/appointments/${this.props.match.params.appointmentId}`)
            .then(
                response => {
                    this.setState({
                        appointment: response.data
                    });
                }
            );
    }

    handlePatientIdChange = (event) => {
        this.setState({
            patientId: event.target.value
        });
    };

    handleReasonChange = (event) => {
        this.setState({
            reason: event.target.value
        });
    };

    handleSubmit (event) {
        axios.post(`${APPOINTMENTS_URL}`, {
            appointmentId: this.state.appointment.id,
            patientId: this.state.patientId,
            reason: this.state.reason
        }).then(
            response => this.props.history.push(`/appointments-booked/${response.data.id}`)
        );

        event.preventDefault();
    }

    render () {
        return (
            <div className="page-width">
                <div className="flex">
                    <div className="border-box inline-box width-auto">
                        <div className="box-title">Book appointment</div>
                        <AppointmentInformation appointment={this.state.appointment}/>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <div>
                                    <label htmlFor="patientId">Patient Id:</label>
                                    <input type="text" name="patientId" value={this.state.patientId}
                                           onChange={this.handlePatientIdChange}/>
                                </div>
                                <div>
                                    <label htmlFor="reason">Reason:</label>
                                    <input type="text" name="reason" value={this.state.reason}
                                           onChange={this.handleReasonChange}/>
                                </div>
                            </div>
                            <input className="btn btn-primary" type="submit" value="Book"/>
                        </form>
                    </div>
                    <div className="border-box inline-box width-400px">
                        <DoctorInformation doctorId={this.state.doctorId}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookAppointmentPage;