import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
const Content = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route path="/people" exact>
                    <div className="content">
                        xyz
                    </div>
                </Route>
                <Route path="/planets" exact>
                    <div className="content">
                        abc
                    </div>
                </Route>
                {/* <Route path="/vue" exact>
                    <div className="content">
                        Vue
                    </div>
                </Route> */}
                <Route path="/" exact>
                    <div className="content">
                        This example project shows independently built and deployed microfrontends that use React and single-spa. Each nav link above takes you to a different microfrontend.
                    </div>
                </Route>
            </Switch>

        </div>
    )
}
export default Content