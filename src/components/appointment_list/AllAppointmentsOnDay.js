import React from 'react';
import moment from 'moment/moment';
import axios from 'axios/index';
import AppointmentsOnDayItem from './AllAppointmentsOnDayItem';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class AllAppointmentsOnDay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
            date: props.date,
            appointments: []
        };
    }

    componentDidMount () {
        const DOCTOR_ID = this.state.doctorId;
        const DATE_URL = moment(this.state.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?date=${DATE_URL}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

    componentWillReceiveProps () {
        const DOCTOR_ID = this.state.doctorId;
        const DATE_URL = moment(this.state.date).format('YYYY-MM-DD');

        axios.get(`${DOCTORS_URL}/${DOCTOR_ID}/appointments?date=${DATE_URL}`)
            .then(
                response => {
                    this.setState({
                        appointments: response.data
                    });
                }
            );
    }

    isOnWeekend = () => {
        return moment(this.state.date).day() === 6 || moment(this.state.date).day() === 0;
    };

    render () {
        let itemStyle = this.isOnWeekend() ? 'item-weekend' : 'item';

        return (
            <div className="appointments-on-day">
                <div className="title">{moment(this.state.date).format('DD.MM')}</div>
                <div className="title">{moment(this.state.date).format('ddd')}</div>
                <div className={itemStyle}>
                    {this.state.appointments.map(appointment => {
                        return (
                            <AppointmentsOnDayItem key={appointment.id} appointment={appointment}/>
                        );
                    })}
                </div>
                <img className="add-btn" src={'/img/add.svg'} alt="add"/>
            </div>
        );
    }
}

export default AllAppointmentsOnDay;