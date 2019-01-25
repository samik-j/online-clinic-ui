import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import AddAppointment from "./AddAppointment";

class AddAppointmentModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

        this.props.loadAppointments()
    };

    render() {
        return (
            <div>
                <img className="clickable add-btn" src={'/img/add.svg'} onClick={this.toggle} alt="add"/>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 0 }} backdropTransition={{ timeout: 0 }} toggle={this.toggle} className={this.props.className} dialogClassName="modal">
                    <ModalHeader toggle={this.toggle}>
                        <div className="box-title width-620px">Add Appointment</div>
                        </ModalHeader>
                    <ModalBody>
                        <AddAppointment date={this.props.date} doctorId={this.props.doctorId}/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddAppointmentModal;