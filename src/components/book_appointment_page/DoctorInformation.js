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
            <div>
                DoctorInformation
            </div>

        );
    }
}

export default DoctorInformation;