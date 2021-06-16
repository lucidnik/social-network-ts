import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/State";

type PropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    newPostText: string
    changeText: (newText: string) => void
}

const App = (props: PropsType) => {

    const posts = props.state.profilePage.posts;
    const dialogs = props.state.dialogsPage.dialogs;
    const messages = props.state.dialogsPage.messages;


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path={'/profile'} render={() => <Profile posts={posts} addPost={props.addPost} newPostText={props.newPostText} changeText={props.changeText} />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

