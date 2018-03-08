import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//COMPONENTS
import Header from './components/Header';
import DoctorListPage from './components/DoctorListPage';
import AppointmentsPage from './components/AppointmentsPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <nav>
                    <ul>
                        <Link to="/doctor-list">SEARCH DOCTORS</Link>
                    </ul>
                    <ul>
                        <Link to="/doctorCreationPage">ADD DOCTOR</Link>
                    </ul>
                </nav>
                <article>
                    <Route exact path="/doctor-list" component={DoctorListPage}/>
                    <Route exact path="/doctors/:doctorId/appointments" component={AppointmentsPage}/>
                </article>
                <footer>Created by Joanna Senczuk</footer>
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));