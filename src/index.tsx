import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from "./redux/ReduxStore";
import {Provider} from "react-redux";

let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

const state = store.getState()

rerenderEntireTree(state);

store.subscribe(() => {
    let newState = store.getState()
    rerenderEntireTree(newState)
} )


