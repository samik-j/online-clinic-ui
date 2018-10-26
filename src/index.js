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

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <article>
                    <Switch>
                        <Route path="/doctors/:doctorId/book-appointment/:appointmentId" component={BookAppointmentPage} exact/>
                        <Route path="/doctors/:doctorId" component={DoctorPage} exact/>
                        <Route path="/doctors" component={DoctorListPage} exact/>
                        <Route path="/profiles/patients/:patientId" component={PatientProfilePage} exact/>
                        <Route path="/profiles/doctors/:doctorId/add-appointment/:date" component={AddAppointmentPage} exact/>
                        <Route path="/profiles/doctors/:doctorId" component={DoctorProfilePage} exact/>
                        <Route path="/appointments-booked/:appointmentId" component={BookedAppointmentSuccess} exact/>
                        <Route path="/" component={Home} exact/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </article>
                <div className="page-width">
                    <nav>
                        <ul>
                            <Link to="/doctors">SEARCH DOCTORS</Link>
                        </ul>
                    </nav>
                </div>
                <footer>Created by Joanna Senczuk</footer>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));