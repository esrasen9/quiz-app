import './App.css';
import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import {routes} from "./routes";

function App() {
  return (
      <div className="app">
          <Header/>
          <Switch>
              {
                  routes.map(route =>
                      (<Route exact path={route.path} component={route.component}/>)
                  )
              }
          </Switch>
      </div>
  );
}

export default App;
