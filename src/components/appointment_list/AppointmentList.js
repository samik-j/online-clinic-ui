import React from 'react';
import moment from 'moment';
import AllAppointmentsOnDay from './AllAppointmentsOnDay';
import AvailableAppointmentsOnDay from './AvailableAppointmentsOnDay';

class AppointmentList extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
            display: props.display,
            date1: moment(),
            date2: moment().add(1, 'days'),
            date3: moment().add(2, 'days'),
            date4: moment().add(3, 'days'),
            date5: moment().add(4, 'days'),
            date6: moment().add(5, 'days'),
            date7: moment().add(6, 'days'),

        };
    }

    handleDateIncrement = (event) => {
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

    handleDateSubtraction = (event) => {
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

    // could be a component
    leftArrow = () => {
        if (this.state.date1.dayOfYear() === moment().dayOfYear()) {
            return (
                <img className="clickable arrows"
                     src={'/img/arrows_left_inactive.png'} alt="Arrows Left"/>
            );
        } else {
            return <img className="clickable arrows" onClick={this.handleDateSubtraction}
                        src={'/img/arrows_left.png'} alt="Arrows Left"/>;
        }
    };

    appointments = () => {
        if (this.state.display === 'all') {
            return (
                <div className="appointments">
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date1}/>
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date2}/>
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date3}/>
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date4}/>
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date5}/>
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date6}/>
                    <AllAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date7}/>
                </div>
            );
        } else if (this.state.display === 'available') {
            return (
                <div className="appointments">
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date1}/>
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date2}/>
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date3}/>
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date4}/>
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date5}/>
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date6}/>
                    <AvailableAppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date7}/>
                </div>
            );
        }
    };

    render () {
        return (
            <div className="doctor-appointment-list">
                {this.leftArrow()}
                {this.appointments()}
                <img className="clickable arrows" onClick={this.handleDateIncrement}
                     src={'/img/arrows_right.png'} alt="Arrows Right"/>
            </div>
        );
    }
}

export default AppointmentList;