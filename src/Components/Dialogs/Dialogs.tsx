import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(element =>
        <DialogItem name={element.name} id={element.id}/>);

    let messagesElements = props.dialogsPage.messages.map(element =>
        <Message message={element.message} likesCount={element.likesCount}/>);

    const addMessageCallback = () => {
        props.addMessage(props.dialogsPage.newMessageText)
        //  props.dispatch(addMessageAC(props.newMessageText));
    };

    const onChangeMessageCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value;
        props.updateMessageText(newText)
       // props.dispatch(updateNewMessageAC(newText));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <input onChange={onChangeMessageCallback} type="text" value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessageCallback}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;