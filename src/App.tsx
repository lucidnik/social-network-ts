import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/State";

type PropsType = {
    store: StoreType
}

const App = (props: PropsType) => {

    const state = props.store.getState();

    const posts = state.profilePage.posts;
    const dialogs = state.dialogsPage.dialogs;
    const messages = state.dialogsPage.messages;
    let newPostText = state.profilePage.newPostText;


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path={'/profile'}
                           render={() => <Profile posts={posts} addPost={props.store.addPost.bind(props.store)}
                                                  newPostText={newPostText}
                                                  changeText={props.store.changeText.bind(props.store)}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

