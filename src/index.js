import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from './context/Context';
import {initialState, reducer} from "./reducer";

ReactDOM.render(
    <React.StrictMode>
        <Provider initialState={initialState} reducer={reducer}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
