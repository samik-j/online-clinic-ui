import React from 'react';
import moment from 'moment';
import axios from 'axios/index';

import AppointmentsOnDay from './AppointmentsOnDay';
import CurrentAppointmentBooked from './CurrentAppointmentBooked';
import ArrowLeft from '../../../../components/ArrowLeft';
import ArrowRight from "../../../../components/ArrowRight";

import {APPOINTMENTS_BOOKED_URL} from "../../../../urls";

class AppointmentTable extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            date1: moment(),
            date2: moment().add(1, 'days'),
            date3: moment().add(2, 'days'),
            date4: moment().add(3, 'days'),
            date5: moment().add(4, 'days'),
            date6: moment().add(5, 'days'),
            date7: moment().add(6, 'days'),

            showDetailsId: ''

        };
    }

    handleDateIncrement = () => {
        this.setState((prevState) => ({
            date1: prevState.date1.add(3, 'days'),
            date2: prevState.date2.add(3, 'days'),
            date3: prevState.date3.add(3, 'days'),
            date4: prevState.date4.add(3, 'days'),
            date5: prevState.date5.add(3, 'days'),
            date6: prevState.date6.add(3, 'days'),
            date7: prevState.date7.add(3, 'days'),
        }));
    };

    handleDateSubtraction = () => {
        this.setState((prevState) => ({
            date1: prevState.date1.subtract(3, 'days'),
            date2: prevState.date2.subtract(3, 'days'),
            date3: prevState.date3.subtract(3, 'days'),
            date4: prevState.date4.subtract(3, 'days'),
            date5: prevState.date5.subtract(3, 'days'),
            date6: prevState.date6.subtract(3, 'days'),
            date7: prevState.date7.subtract(3, 'days'),
        }));
    };

    showDetails = (appointmentId) => {
        axios.get(`${APPOINTMENTS_BOOKED_URL}?appointmentId=${appointmentId}`)
            .then(
                response => {
                    this.setState({
                        showDetailsId: response.data
                    });
                }
            );
    };

    details = () => {
        if (this.state.showDetailsId === '') {
            return (
                <div className="description">Click on a booked appointment to see the details</div>
            );
        } else {
            return (
                <CurrentAppointmentBooked appointment={this.state.showDetailsId}/>
            );
        }
    };

    appointments = () => {
        return (
            <div className="appointments">
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date1}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date2}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date3}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date4}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date5}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date6}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
                <AppointmentsOnDay doctorId={this.props.doctorId} date={this.state.date7}
                                   details={(appointmentId) => this.showDetails(appointmentId)}/>
            </div>
        );
    };

    render () {
        return (
            <div>
                <div className="appointment-table">
                    <ArrowLeft date={this.state.date1} onClick={this.handleDateSubtraction}/>
                    {this.appointments()}
                    <ArrowRight date={this.state.date7} onClick={this.handleDateIncrement}/>
                </div>
                {this.details()}

            </div>
        );
    }
}

export default AppointmentTable;