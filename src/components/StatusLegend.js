import React from 'react';
import AppointmentStatusIcon from './AppointmentStatusIcon';

const StatusLegend = () => {
    return (
        <div className="status-legend">
            <div>
                <div className="item">
                    <div>Cancelled</div>
                    <div className="icon">
                        <AppointmentStatusIcon status={'CANCELLED'}/>
                    </div>
                </div>
                <div className="item">
                    <div>Not Confirmed</div>
                    <div className="icon">
                        <AppointmentStatusIcon status={'NOT_CONFIRMED'}/>
                    </div>
                </div>
                <div className="item">
                    <div>Confirmed</div>
                    <div className="icon">
                        <AppointmentStatusIcon status={'CONFIRMED'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusLegend;