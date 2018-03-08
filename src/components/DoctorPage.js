import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doctor: '',
            appointments: []
        }
    }

    componentDidMount() {
        axios.get(`${DOCTORS_URL}/${this.props.match.params.doctorId}`)
            .then(
                response => {
                    this.setState({
                        doctor: response.data
                    })
                }
            );
        axios.get(`${DOCTORS_URL}/${this.props.match.params.doctorId}/appointments`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    })
                });
    }

    render() {
        return (
            <div className="page-width">
                <div className="doctor">
                    <img className="doctor-avatar"
                         src={"/img/doctor_avatar.jpg"}
                         alt="Doctor"/>
                    <div className="doctor-info">
                        <div className="doctor-name">{this.state.doctor.firstName}</div>
                        <div className="doctor-name">{this.state.doctor.lastName}</div>
                        <div className="doctor-specialty">{this.state.doctor.specialty}</div>
                        <Link className="btn btn-primary book-btn" to={`/doctors/${this.state.doctor.id}/appointments`}>Book
                            appointment</Link>
                    </div>
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>dATE</th>
                                <th>TIME</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.appointments.map(appointment => {
                                    return (
                                        <tr key={appointment.id}>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.time}</td>
                                        </tr>)
                                })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorPage;