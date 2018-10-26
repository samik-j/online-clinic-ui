import React from 'react';
import axios from 'axios';
import DoctorInformation from './DoctorInformation';
import StatusLegend from '../../../components/StatusLegend';
import DoctorAppointmentsList from './DoctorAppointmentList';
import DoctorProfileAppointmentTable from './appointment_table/AppointmentTable';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorProfile extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctor: '',
            doctorId: this.props.match.params.doctorId,
            expandedPastAppointments: false
        };
    }

    componentDidMount () {
        axios.get(`${DOCTORS_URL}/${this.props.match.params.doctorId}`)
            .then(
                response => {
                    this.setState({
                        doctor: response.data
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
                    <img className="clickable arrow" onClick={this.togglePastAppointments} src={'/img/arrow_up.svg'} alt="Hide"/>
                    <DoctorAppointmentsList doctorId={this.state.doctorId} current={false}/>
                    <img className="clickable arrow" onClick={this.togglePastAppointments} src={'/img/arrow_up.svg'} alt="Hide"/>
                </div>
            );
        } else {
            return (
                <img className="expand-hide clickable arrow" onClick={this.togglePastAppointments} src={'/img/arrow_down.svg'} alt="Expand"/>
            );
        }
    };


    render () {
        return (
            <div className="page-width">
                <div className="doctor profile">
                    <div className="border-box">
                        <DoctorInformation doctor={this.state.doctor}/>
                    </div>
                    <div className="border-box">
                        <div className="box-title">Appointments</div>
                        <DoctorProfileAppointmentTable doctorId={this.state.doctorId} display={'all'}/>
                    </div>
                    <div className="border-box">
                        <StatusLegend/>
                        <div className="box-title">Current booked appointments</div>
                        <DoctorAppointmentsList doctorId={this.state.doctorId} current={true}/>
                        <div className="box-title">Past booked appointments</div>
                        {this.pastAppointments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorProfile;