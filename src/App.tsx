import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {state} from "./State";

const App = () => {

    const posts = state.profilePage.posts
    const dialogs = state.dialogsPage.dialogs
    const messages = state.dialogsPage.messages


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path={'/profile'} render={() => <Profile posts={posts} />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs} />}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

