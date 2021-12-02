import './App.css';
import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import {routes} from "./routes";

function App() {
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}

export default App;
