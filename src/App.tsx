import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, RootStateType} from "./redux/Store";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes ) => void
}

const App = (props: PropsType) => {

    const posts = props.state.profilePage.posts;
    const dialogs = props.state.dialogsPage.dialogs;
    const messages = props.state.dialogsPage.messages;
    let newPostText = props.state.profilePage.newPostText;
    let newMessageText = props.state.dialogsPage.newMessageText


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path={'/profile'}
                           render={() => <Profile posts={posts} newPostText={newPostText} dispatch={props.dispatch} />}/>

                    <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs} dispatch={props.dispatch} newMessageText={newMessageText} />}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

