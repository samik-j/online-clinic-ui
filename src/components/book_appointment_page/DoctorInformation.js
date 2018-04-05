import React from 'react';
import axios from 'axios/index';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorInformation extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctor: ''
        };
    }

    componentDidMount () {
        axios.get(`${DOCTORS_URL}/${this.props.doctorId}`)
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
            <div className="doctor-info">
                <img className="avatar"
                     src={'/img/doctor_avatar.jpg'}
                     alt="Doctor"/>
                <div className="info">
                    <div className="name">{this.state.doctor.firstName}&nbsp;{this.state.doctor.lastName}</div>
                    <small>{this.state.doctor.specialty}</small>
                </div>
            </div>

        );
    }
}

export default DoctorInformation;