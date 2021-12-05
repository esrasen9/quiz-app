import './App.css';
import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import {routes} from "./routes";

function App() {
  return (
      <div className="app">
          <Switch>
              {
                  routes.map((route,index) =>
                      (<Route key={index} exact path={route.path} component={route.component}/>)
                  )
              }
          </Switch>
      </div>
  );
}

export default App;
