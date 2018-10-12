import React from 'react';

const DropdownOptions = ({range, increment}) => {
    let options = [];
    options.push(<option hidden value=""></option>);
    for (let i = 0; i < range && i < 10; i += increment) {
        let value = "0" + i;
        options.push(<option value={value} key={value}>{value}</option>);
    }
    for (let i = 10; i < range; i += increment) {
        options.push(<option value={i} key={i}>{i}</option>);
    }

    return options;
};

export default DropdownOptions;