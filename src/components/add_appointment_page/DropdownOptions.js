import React from 'react';

const DropdownOptions = ({range, increment, onChange}) => {

    let options = [];
    options.push(<option hidden value=""></option>);
    for (let i = 0; i < range; i += increment) {
        if (i < 10) {
            let value = "0" + i;
            options.push(<option value={value} key={value}>{value}</option>);
        } else {
            options.push(<option value={i} key={i}>{i}</option>);
        }
    }

    return (
        <div className="time-input">
            <select id="minutes" name="minutes" className="form-control dropdown" onChange={onChange}>
                {options}
            </select>
        </div>
    );

};

export default DropdownOptions;