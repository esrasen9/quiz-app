import './App.css';
import React from "react";
import {
    Switch,
    Route, BrowserRouter,
} from "react-router-dom";
import {routes} from "./routes";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    {
                        routes.map((route, index) =>
                            (<Route key={index} exact path={route.path} component={route.component}/>)
                        )
                    }
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
