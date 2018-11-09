import React from 'react';
import axios from 'axios';

//COMPONENTS
import DoctorList from './DoctorList';

import Select from 'react-select';

const DOCTORS_URL = 'http://localhost:8080/doctors';

class DoctorListPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            doctors: [],
            specialty: ''
        };
    }

    componentDidMount () {
        axios.get(DOCTORS_URL).then(
            response => {
                this.setState({doctors: response.data});
            }
        );
    }

    handleSpecialtyChange2 = (specialty) => {
        const newSpecialty = specialty.value;

        const URL = newSpecialty === 'all' ? DOCTORS_URL : `${DOCTORS_URL}?specialty=${newSpecialty}`;

        axios.get(URL).then(
            response => {
                this.setState({
                    doctors: response.data,
                    specialty: newSpecialty
                });

            }
        );
    };

    render () {
        return (
            <div>
                <div className="doctor-list-header">
                    <div className="page-width">
                        <div className="specialty-drop-down">
                            <Select
                                clearable={false}
                                name="choose-specialty"
                                placeholder="search by specialty"
                                value={this.state.specialty}
                                onChange={this.handleSpecialtyChange2}
                                options={[
                                    {value: 'DERMATOLOGIST', label: 'dermatologist'},
                                    {value: 'INTERNIST', label: 'internist'},
                                    {value: 'ENDOCRINOLOGIST', label: 'endocrinologist'},
                                    {value: 'GENERAL_PHYSICIAN', label: 'general physician'},
                                    {value: 'PEDIATRICIAN', label: 'pediatrician'},
                                    {value: 'all', label: 'all'},
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="page-width">
                    <DoctorList doctors={this.state.doctors}/>
                </div>
            </div>
        );
    }
}

export default DoctorListPage;