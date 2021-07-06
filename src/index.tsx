import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/Store";

let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );

};

const state = store.getState()

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

