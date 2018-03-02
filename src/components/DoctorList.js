import React from 'react';
import Doctor from './Doctor';

const DoctorList = (props) => {

    const doctors = props.doctors.map((doctor) => {
            return (
                <Doctor key={doctor.id} doctor={doctor}/>
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