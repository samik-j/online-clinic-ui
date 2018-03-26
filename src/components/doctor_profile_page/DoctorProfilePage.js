import React from 'react';
import axios from 'axios';
import DoctorInformation from './DoctorInformation';
import AppointmentList from './AppointmentList';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorProfilePage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctor: '',
            doctorId: this.props.match.params.doctorId
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

    render () {
        return (
            <div className="page-width">
                <div className="profile">
                    <div className="border-box">
                        <DoctorInformation doctor={this.state.doctor}/>
                    </div>
                    <div className="border-box">
                        <div className="box-title">Appointments</div>
                        <AppointmentList doctorId={this.state.doctorId}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default DoctorProfilePage;