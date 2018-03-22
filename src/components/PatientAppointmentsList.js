import React from 'react'
import axios from 'axios/index'
import PatientAppointmentsListItem from './PatientAppointmentsListItem'

const APPOINTMENTS_BOOKED_URL = 'http://localhost:8080/appointmentsBooked'

class PatientAppointmentsList extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            patientId: props.patientId,
            appointments: []
        }
    }

    componentDidMount () {
        const patientId = this.state.patientId

        axios.get(`${APPOINTMENTS_BOOKED_URL}?patientId=${patientId}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    })
                }
            )
    }

    render () {
        return (
            <div>
                {
                    this.state.appointments.map((appointment) => {
                        return (
                            <PatientAppointmentsListItem key={appointment.id} appointment={appointment}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default PatientAppointmentsList