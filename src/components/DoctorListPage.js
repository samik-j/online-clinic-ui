import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

//COMPONENTS
import Doctor from './Doctor';
import DoctorList from './DoctorList'

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doctors: [],
            firstName: '',
            lastName: ''
        };
    }

    componentDidMount() {
        axios.get(DOCTORS_URL).then(
            response => {
                this.setState({doctors: response.data})
            }
        );
    }

    render() {
        return (
            <div>
                <DoctorList doctors={this.state.doctors}/>
            </div>
        )
    }
}

export default DoctorListPage;