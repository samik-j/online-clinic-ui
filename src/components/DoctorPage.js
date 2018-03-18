import React from 'react'
import axios from 'axios'
import AppointmentList from './AppointmentList'

const DOCTORS_URL = 'http://localhost:8080/doctors'

class DoctorPage extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            doctor: '',
            doctorId: this.props.match.params.doctorId
        }
    }

    componentDidMount () {
        axios.get(`${DOCTORS_URL}/${this.props.match.params.doctorId}`)
            .then(
                response => {
                    this.setState({
                        doctor: response.data
                    })
                }
            )
    }

    render () {
        return (
            <div className="page-width">
                <div className="doctor">
                    <div className="border-box">
                        <img className="avatar"
                             src={'/img/doctor_avatar.jpg'}
                             alt="Doctor"/>
                        <div className="info">
                            <div className="name">{this.state.doctor.firstName}</div>
                            <div className="name">{this.state.doctor.lastName}</div>
                            <div className="specialty">{this.state.doctor.specialty}</div>
                        </div>
                    </div>
                    <div className="border-box">
                        <div className="box-title">Book appointment</div>
                        <AppointmentList doctorId={this.state.doctorId}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorPage