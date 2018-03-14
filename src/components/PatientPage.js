import React from 'react';
import axios from 'axios'

const PATIENTS_URL = 'http://localhost:8080/patients'

class PatientPage extends React.Component {

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
                            <div className="name">{this.state.patient.firstName}</div>
                            <div className="name">{this.state.patient.lastName}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default PatientPage;