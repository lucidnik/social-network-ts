import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeText, RootStateType} from "./redux/State";

export let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} changeText={changeText} />
        </React.StrictMode>,
        document.getElementById('root')
    );

};
