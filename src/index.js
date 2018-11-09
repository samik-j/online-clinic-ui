import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

//COMPONENTS
import Header from './components/Header';
import Home from './pages/Home';
import DoctorListPage from './pages/browse/doctor_list/DoctorListPage';
import DoctorPage from './pages/browse/doctor/DoctorPage';
import PatientProfile from './pages/patient/profile/PatientProfile';
import DoctorProfile from './pages/doctor/profile/DoctorProfile';
import AddAppointment from './pages/doctor/add_appointment/AddAppointment';
import BookAppointment from './pages/browse/book_appointment/BookAppointment';
import BookAppointmentSuccess from './pages/browse/book_appointment/BookAppointmentSuccess';
import NotFound from './pages/NotFound';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <article>
                    <Switch>
                        <Route path="/doctors/:doctorId/book-appointment/:appointmentId" component={BookAppointment} exact/>
                        <Route path="/doctors/:doctorId" component={DoctorPage} exact/>
                        <Route path="/doctors" component={DoctorListPage} exact/>
                        <Route path="/profiles/patients/:patientId" component={PatientProfile} exact/>
                        <Route path="/profiles/doctors/:doctorId/add-appointment/:date" component={AddAppointment} exact/>
                        <Route path="/profiles/doctors/:doctorId" component={DoctorProfile} exact/>
                        <Route path="/appointments-booked/:appointmentId" component={BookAppointmentSuccess} exact/>
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