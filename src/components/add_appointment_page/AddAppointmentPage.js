import React from 'react';
import moment from 'moment';
import axios from 'axios';

const URL = 'http://localhost:8080/doctors';

class AddAppointmentPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            date: this.props.match.params.date,
            time: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleTimeChange = (event) => {
        this.setState({
            time: event.target.value
        });
    };

    handleSubmit () {
        console.log(this.state.date);
        fetch(`${URL}/${this.props.match.params.doctorId}/appointments`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: this.state.date,
                time: this.state.time,
            })
        }).then(
            this.props.history.push(`/profiles/doctors/${this.props.match.params.doctorId}`)
        );
    }

    handleSubmit2 (event) {
        axios.post(`${URL}/${this.props.match.params.doctorId}/appointments`, {
            date: this.state.date,
            time: this.state.time,
        }).then(
            this.props.history.push(`/profiles/doctors/${this.props.match.params.doctorId}`)
        );

        event.preventDefault();
    }

    render () {
        return (
            <div className="page-width">
                <div className="border-box">
                    <div className="box-title">Add appointment</div>
                    <div className="add-appointment">
                        <h3>
                            {moment(this.state.date).format('DD MMMM YYYY')}
                            <br/>
                            <small>{moment(this.state.date).format('dddd')}</small>
                        </h3>
                        <form onSubmit={this.handleSubmit2}>
                            <div className="form-group">
                                <input type="text" name="time" value={this.state.time}
                                       onChange={this.handleTimeChange}/>
                            </div>
                            <input className="btn btn-primary" type="submit" value="Add"/>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointmentPage;