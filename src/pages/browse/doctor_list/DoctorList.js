import React from 'react';
import DoctorListItem from './DoctorListItem';

const DoctorList = ({doctors}) => {

    const doctorList = doctors.map((doctor) => {
            return (
                <DoctorListItem key={doctor.id} doctor={doctor}/>
            )
        }
    );

    return (
        <div>
            {doctorList}
        </div>
    )
};

export default DoctorList;