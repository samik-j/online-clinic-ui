import React from 'react';
import axios from 'axios/index';

import AppointmentInformation from './AppointmentInformation';
import DoctorInformation from './DoctorInformation';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class BookAppointmentPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: this.props.match.params.doctorId,
            appointment: ''
        };
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

    render () {
        return (
            <div className="page-width">
                <div className="flex">
                <div className="border-box inline-box width-auto">
                    <div className="box-title">Book appointment</div>
                    <AppointmentInformation appointment={this.state.appointment}/>
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