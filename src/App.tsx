import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, RootStateType} from "./redux/ReduxStore";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes ) => void
}

const App = (props: PropsType) => {
    debugger

    const dialogs = props.state.dialogsReducer.dialogs
    const messages = props.state.dialogsReducer.messages
    let newMessageText = props.state.dialogsReducer.newMessageText
    let newPostText = props.state.profileReducer.newPostText
    const posts = props.state.profileReducer.posts


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

