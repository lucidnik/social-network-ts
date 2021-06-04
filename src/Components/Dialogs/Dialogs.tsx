import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";

let dialogs = [
    {id: 1, name: 'Nikita'},
    {id: 1, name: 'Valera'},
    {id: 1, name: 'Andrei'},
    {id: 1, name: 'Viktor'},
    {id: 1, name: 'Angelo'}
];

let messages = [
    {message: 'Sup', likesCount: 1,},
    {message: 'Yo', likesCount: 1,},
    {message: 'Hey', likesCount: 1,},
    {message: 'Hi', likesCount: 1,},
    {message: 'Howdy', likesCount: 1,},

];

const Dialogs = () => {

    let dialogsElements = dialogs.map(element =>
        <DialogItem name={element.name} id={element.id}/>);

    let messagesElements = messages.map(element =>
        <Message message={element.message} likesCount={element.likesCount}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;