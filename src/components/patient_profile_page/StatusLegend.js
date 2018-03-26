import React from 'react';

const StatusLegend = () => {
    return (
        <div className="status-legend">
            <div>
                <div className="item">
                    <div>Cancelled</div>
                    <img className="icon" src={'/img/status_cancelled.svg'} alt="status_cancelled"/>
                </div>
                <div className="item">
                <div>Not Confirmed</div>
                    <img className="icon" src={'/img/status_not_confirmed.svg'} alt="status_cancelled"/>
                </div>
                <div className="item">
                    <div>Confirmed</div>
                    <img className="icon" src={'/img/status_confirmed.svg'} alt="status_cancelled"/>
                </div>
            </div>
        </div>
    );
};

export default StatusLegend;