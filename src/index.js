import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter, Route} from 'react-router-dom';

//COMPONENTS
import DoctorListPage from './components/DoctorListPage';
import Header from './components/Header';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route path="/doctorlist" component={DoctorListPage}/>
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));