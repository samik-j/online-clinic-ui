import React from 'react';
import axios from "axios";

//COMPONENTS
import DoctorList from './DoctorList'

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doctors: [],
            specialty: ''
        };

        this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this);
    }

    componentDidMount() {
        axios.get(DOCTORS_URL).then(
            response => {
                this.setState({doctors: response.data})
            }
        );
    }

    handleSpecialtyChange(event) {
        const newSpecialty = event.target.value;

        if (newSpecialty === "all") {
            axios.get(DOCTORS_URL).then(
                response => {
                    this.setState({doctors: response.data,
                        specialty: newSpecialty
                    })

                }
            );
        } else {

            axios.get(`${DOCTORS_URL}?specialty=${newSpecialty}`).then(
                response => {
                    this.setState({
                        doctors: response.data,
                        specialty: newSpecialty
                    })
                }
            )
        }
    }

    render() {
        return (
            <div>
                <div className="specialtyDropDown">
                    <select id="specialty" name="specialty" className="form-control"
                            value={this.state.specialty} onChange={this.handleSpecialtyChange}>
                        <option hidden value="">search by specialty</option>
                        <option value="GYNAECOLOGIST">gynaecologist</option>
                        <option value="DERMATOLOGIST">dermatologist</option>
                        <option value="PEDIATRICIAN">pediatrician</option>
                        <option value="INTERNIST">internist</option>
                        <option value="ENDOCRINOLOGIST">endocrinologist</option>
                        <option value="GENERAL_PHYSICIAN">general physician</option>
                        <option value="all">all</option>
                    </select>
                </div>
                <DoctorList doctors={this.state.doctors}/>
            </div>
        )
    }
}

export default DoctorListPage;