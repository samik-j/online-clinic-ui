import React from 'react';

const DropdownOptions = ({range, increment, time}) => {

    const setTime = (event) => {
        time(event);
    };

    let options = [];
    options.push(<option hidden value=""></option>);
    for (let i = 0; i < 10 && i < range; i += increment) {
        let value = "0" + i;
        options.push(<option value={value} key={value}>{value}</option>);
    }
    for (let i = 10; i < range; i += increment) {
        options.push(<option value={i} key={i}>{i}</option>);
    }

    return (
        <div className="time-input">
            <select id="minutes" name="minutes" className="form-control dropdown" onChange={setTime}>
                {options}
            </select>
        </div>
    );

};

export default DropdownOptions;