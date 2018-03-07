import React from 'react';
import DoctorListItem from './DoctorListItem';

const DoctorList = (props) => {

    const doctors = props.doctors.map((doctor) => {
            return (
                <DoctorListItem key={doctor.id} doctor={doctor}/>
            )
        }
    );

    return (
        <div>
            {doctors}
        </div>
    )
};

export default DoctorList;