import React from 'react';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class AppointmentsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appointments: []
        };
    }

    componentDidMount() {
        fetch(`${DOCTORS_URL}/${this.props.match.params.doctorId}/appointments`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments: json })
            });
    }


    render() {

        return (
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
                        this.state.appointmentsAvailable.map(appointment => {
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
        );
    }
}

export default AppointmentsPage;