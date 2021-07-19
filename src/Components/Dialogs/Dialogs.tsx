import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";
import { DialogsType, MessagesType} from "../../redux/DialogsReducer";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    addMessageCallback: () => void
    onChangeMessageCallback: (newText: string) => void

}


const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(element =>
        <DialogItem name={element.name} id={element.id}/>);

    let messagesElements = props.messages.map(element =>
        <Message message={element.message} likesCount={element.likesCount}/>);

    const addMessage = () => {
        props.addMessageCallback()
        //  props.dispatch(addMessageAC(props.newMessageText));
    };

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value;
        props.onChangeMessageCallback(newText)
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
                <input onChange={onChangeMessage} type="text" value={props.newMessageText}/>
                <button onClick={addMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;