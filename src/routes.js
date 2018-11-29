import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './components/Header/Header.js';
import HomePage from './pages/HomePage/HomePage.js';
import JobListPage from './pages/JobListPage/JobListPage.js'
import UserPage from './pages/UserPage/UserPage.js';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.js';
import Footer from './components/Footer/Footer.js';

const Layout = ({ match }) => {
    return (
        <div className="layout">
            <Header />
            <Route path={`${match.url}/`} component={HomePage} />
            <Route path={`${match.url}UserPage`} component={UserPage} />
            <Route path={`${match.url}JobListPage}`} component={JobListPage} />
            <Route path={`${match.url}RegistrationPage`} component={RegistrationPage} />
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        curUser: state.user
    }
}

export default connect(mapStateToProps, null)(Layout);

