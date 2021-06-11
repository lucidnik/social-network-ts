import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../State";
import DialogItem from "./DialogsItem/DialogsItem";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}


const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(element =>
        <DialogItem name={element.name} id={element.id}/>);

    let messagesElements = props.messages.map(element =>
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