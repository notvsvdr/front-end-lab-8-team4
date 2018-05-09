import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Header from './components/Header/Header.js';
import Footer from './components/Footer/footer.js';
import Page from './pages/RoksaPage/Page.js';
import UserProfile from './pages/SamPage/UserProfile';
import jobInfo from './pages/SergiyPage/jobInfo.js';
import Addjob from './pages/SergiyPage/addjob.js';
import Login from './components/Login/Login.js';
import Registration from './components/Registration/Registration.js';
import editJob from './pages/SergiyPage/editJob.js';

const App = () => (
	<Router>
		<Route path="/" component={Layout} />
	</Router>
);

const Layout = ({ match }) => (
	<div className="layout">
		<Header />
		<Route exact path={`${match.url}Page`} component={Page} />
		<Route path={`${match.url}UserProfile`} component={UserProfile} />
		<Route path={`${match.url}jobInfo`} component={jobInfo} />
		<Route path={`${match.url}Addjob`} component={Addjob} />
		<Route path={`${match.url}editJob`} component={editJob} />
		<Route path={`${match.url}login`} component={Login} />
		<Route path={`${match.url}registration`} component={Registration} />
		<Footer/>
	</div>
);

export default App
