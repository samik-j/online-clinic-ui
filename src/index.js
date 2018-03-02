import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter, Route, Link} from 'react-router-dom';

//COMPONENTS
import DoctorListPage from './components/DoctorListPage';
import Header from './components/Header';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <BrowserRouter>
            <div className="pageMargin">
                <Header/>
                <nav>
                    <ul>
                        <Link to="/doctorCreationPage">ADD DOCTOR</Link>
                    </ul>
                </nav>
                <article>
                <Route path="/doctorlist" component={DoctorListPage}/>
                </article>
                <footer>Created by Joanna</footer>
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));