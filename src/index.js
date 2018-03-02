import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter, Route} from 'react-router-dom';
import DoctorListPage from './components/DoctorListPage';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <h1>Online Clinic</h1>
                <Route path="/doctorlist" component={DoctorListPage}/>
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));