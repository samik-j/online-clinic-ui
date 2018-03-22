import React from 'react';
import axios from 'axios'
import PatientAppointmentsList from './PatientAppointmentsList'

const PATIENTS_URL = 'http://localhost:8080/patients'

class PatientProfilePage extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            patient: '',
            patientId: this.props.match.params.patientId
        }
    }

    componentDidMount () {
        axios.get(`${PATIENTS_URL}/${this.props.match.params.patientId}`)
            .then(
                response => {
                    this.setState({
                        patient: response.data
                    })
                }
            )
    }

    render() {
        return (
            <div className="page-width">
                <div className="patient">
                    <div className="border-box">
                        <img className="avatar"
                             src={'/img/patient_avatar.jpg'}
                             alt="Patient"/>
                        <div className="info">
                            <div className="name">{this.state.patient.firstName}&nbsp;{this.state.patient.lastName}</div>
                        </div>
                    </div>
                    <div className="border-box">
                        <div className="box-title">Booked appointments</div>
                        <PatientAppointmentsList patientId={this.state.patientId}/>
                    </div>

                </div>
            </div>
        )
    }

}

export default PatientProfilePage;