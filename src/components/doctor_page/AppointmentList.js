import React from 'react';
import moment from 'moment';
import AppointmentsOnDay from './AppointmentsOnDay';

class AppointmentList extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctorId: props.doctorId,
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

    render () {
        return (
            <div className="doctor-appointment-list">
                <img className="arrows" onClick={this.handleDateSubtraction}
                     src={'/img/arrows_left.png'} alt="Arrows Left"/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date1}/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date2}/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date3}/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date4}/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date5}/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date6}/>
                <AppointmentsOnDay doctorId={this.state.doctorId} date={this.state.date7}/>
                <img className="arrows" onClick={this.handleDateIncrement}
                     src={'/img/arrows_right.png'} alt="Arrows Right"/>
            </div>
        );
    }
}

export default AppointmentList;