import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../assets/logo.svg';
import logo2 from '../assets/coin_drg_1.png';

const Content = () => {
    console.log({ logo })
    return (
        <div className="main-content">
            <Switch>
                <Route path="/react/people" exact>
                    <div className="content">
                        xyz
                    </div>
                </Route>
                <Route path="/react/planets" exact>
                    <div className="content">
                        <div className="App">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <img src={logo2} className="App-logo" alt="logo" style={{ maxWidth: "50%" }} />
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                            </header>
                        </div>
                    </div>
                </Route>
                {/* <Route path="/vue" exact>
                    <div className="content">
                        Vue
                    </div>
                </Route> */}
                <Route path="/" >
                    <div className="content">
                        This example project shows independently built and deployed microfrontends that use React and single-spa. Each nav link above takes you to a different microfrontend.
                    </div>
                </Route>
            </Switch>

        </div >
    )
}
export default Content