import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import axios from "axios/index";
import {APPOINTMENTS_BOOKED_URL} from "../../../../../urls";
import AppointmentInformation from "./AppointmentInformation";

class AppointmentInfoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            appointment: ''
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        this.getAppointment();
    };

    getAppointment = () => {
        const APPOINTMENT_ID = this.props.appointment.appointmentBookedId;
        axios.get(`${APPOINTMENTS_BOOKED_URL}/${APPOINTMENT_ID}`)
            .then(
                response => {
                    this.setState({
                        appointment: response.data,
                    });
                }
            );
    };

    render() {
        return (
            <div>
                <button className="appointment not-available" onClick={this.toggle}>
                    <div>{this.props.appointment.time}</div>
                </button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 0 }} backdropTransition={{ timeout: 0 }} toggle={this.toggle} className={this.props.className} dialogclassname="modal">
                    <ModalHeader toggle={this.toggle}>
                        <div className="box-title width-620px">Appointment Info</div>
                    </ModalHeader>
                    <ModalBody>
                       <AppointmentInformation appointment={this.state.appointment}/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AppointmentInfoModal;