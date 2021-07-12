import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";
import {addMessageAC, DialogsType, MessagesType, updateNewMessageAC} from "../../redux/DialogsReducer";
import {ActionTypes} from "../../redux/ReduxStore";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionTypes) => void
}


const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(element =>
        <DialogItem name={element.name} id={element.id}/>);

    let messagesElements = props.messages.map(element =>
        <Message message={element.message} likesCount={element.likesCount}/>);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value;
        props.dispatch(updateNewMessageAC(newText));
    };

    const addMessageCallback = () => {
        props.dispatch(addMessageAC(props.newMessageText));
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
                <input onChange={onChangeCallback} type="text" value={props.newMessageText}/>
                <button onClick={addMessageCallback}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;