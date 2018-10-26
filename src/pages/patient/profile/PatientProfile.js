import React from 'react';
import axios from 'axios';
import PatientAppointmentsList from './PatientAppointmentsList';
import PatientInformation from './PatientInformation';
import StatusLegend from '../../../components/StatusLegend';

const PATIENTS_URL = 'http://localhost:8080/patients';

class PatientProfile extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            patient: '',
            patientId: this.props.match.params.patientId,
            expandedPastAppointments: false
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

    togglePastAppointments = () => {
        this.setState({
            expandedPastAppointments: !this.state.expandedPastAppointments
        });
    };

    pastAppointments = () => {
        if (this.state.expandedPastAppointments) {
            return (
                <div>
                    <img className="clickable arrow" onClick={this.togglePastAppointments} src={'/img/arrow_up.svg'}
                         alt="Hide"/>
                    <PatientAppointmentsList patientId={this.state.patientId} current={false}/>
                    <img className="clickable arrow" onClick={this.togglePastAppointments} src={'/img/arrow_up.svg'}
                         alt="Hide"/>
                </div>
            );
        } else {
            return (
                <img className="expand-hide clickable arrow" onClick={this.togglePastAppointments}
                     src={'/img/arrow_down.svg'}
                     alt="Expand"/>
            );
        }
    };

    render () {
        return (
            <div className="page-width">
                <div className="profile">
                    <div className="border-box">
                        <PatientInformation patient={this.state.patient}/>
                    </div>
                    <div className="border-box">
                        <StatusLegend/>
                        <div className="box-title">Current appointments</div>
                        <PatientAppointmentsList patientId={this.state.patientId} current={true}/>
                        <div className="box-title">Past appointments</div>
                        {this.pastAppointments()}
                    </div>
                </div>
            </div>
        );
    }

}

export default PatientProfile;