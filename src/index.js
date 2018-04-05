import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

//COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
import DoctorListPage from './components/doctor_list_page/DoctorListPage';
import DoctorPage from './components/doctor_page/DoctorPage';
import PatientProfilePage from './components/patient_profile_page/PatientProfilePage';
import DoctorProfilePage from './components/doctor_profile_page/DoctorProfilePage';
import AddAppointmentPage from './components/add_appointment_page/AddAppointmentPage';
import BookAppointmentPage from './components/book_appointment_page/BookAppointmentPage';
import BookedAppointmentSuccess from './components/book_appointment_page/BookedAppointmentSuccess';
import NotFound from './components/NotFound';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <article>
                    <Switch>
                        <Route path="/doctors/:doctorId/book-appointment/:appointmentId" component={BookAppointmentPage}/>
                        <Route path="/doctors/:doctorId" component={DoctorPage}/>
                        <Route path="/doctors" component={DoctorListPage}/>
                        <Route path="/profiles/patients/:patientId" component={PatientProfilePage}/>
                        <Route path="/profiles/doctors/:doctorId/add-appointment/:date" component={AddAppointmentPage}/>
                        <Route path="/profiles/doctors/:doctorId" component={DoctorProfilePage}/>
                        <Route path="/appointments-booked/:appointmentId" component={BookedAppointmentSuccess}/>
                        <Route path="/" component={Home}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </article>
                <div className="page-width">
                    <nav>
                        <ul>
                            <Link to="/doctors">SEARCH DOCTORS</Link>
                        </ul>
                        <ul>
                            <Link to="/doctorCreationPage">ADD DOCTOR</Link>
                        </ul>
                    </nav>
                </div>
                <footer>Created by Joanna Senczuk</footer>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));