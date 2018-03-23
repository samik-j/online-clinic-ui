import React from 'react';
import axios from 'axios';
import PatientAppointmentsList from './PatientAppointmentsList';
import PatientInformation from './PatientInformation';

const PATIENTS_URL = 'http://localhost:8080/patients';

class PatientProfilePage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            patient: '',
            patientId: this.props.match.params.patientId
        };
    }

    componentDidMount () {
        axios.get(`${PATIENTS_URL}/${this.props.match.params.patientId}`)
            .then(
                response => {
                    this.setState({
                        patient: response.data
                    });
                }
            );
    }

    render () {
        return (
            <div className="page-width">
                <div className="profile">
                    <div className="border-box">
                        <PatientInformation patient={this.state.patient}/>
                    </div>
                    <div className="border-box">
                        <div className="box-title">Current appointments</div>
                        <PatientAppointmentsList patientId={this.state.patientId} current={true}/>
                        <div className="box-title">Past appointments</div>
                        <PatientAppointmentsList patientId={this.state.patientId} current={false}/>
                    </div>

                </div>
            </div>
        );
    }

}

export default PatientProfilePage;