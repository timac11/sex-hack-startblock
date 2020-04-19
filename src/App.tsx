import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './App.css';
import LoginPage from "./pages/login/login-page";
import RegistrationPage from "./pages/registration/registration-page";
import AppHeader from "./components/header/header";
import UsersPage from "./pages/users/users-page";
import {Button, Layout} from "antd";
import UserPage from "./pages/user/user-page";
import AgreementPage from "./pages/agreement/agreement-page";
import DoctorPage from "./pages/doctor/doctor-page";

class App extends Component {
    render() {
        return (
            <Router>
                <Layout className="layout">
                <AppHeader/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login"/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/registration">
                        <RegistrationPage/>
                    </Route>
                    <Route path="/agreement">
                        <AgreementPage/>
                    </Route>
                    <Route path="/user">
                        <UserPage/>
                    </Route>
                    <Route path="/users">
                        <UsersPage/>
                    </Route>
                    <Route path="/doctor">
                        <DoctorPage/>
                    </Route>
                    <Route path={'/clear'}>
                        <Button
                            onClick={() => {
                                localStorage.removeItem('male_consent');
                                localStorage.removeItem('female_consent');
                            }}
                        >
                            Clear
                        </Button>
                    </Route>
                </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
