import React from "react";
import {addMessageAC, DialogsType, MessagesType, updateNewMessageAC} from "../../redux/DialogsReducer";
import {ActionTypes} from "../../redux/ReduxStore";
import Dialogs from "./Dialogs";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionTypes) => void
}


const DialogsContainer = (props: PropsType) => {

    const onChangeMessageCallback = (newText: string) => {
        props.dispatch(updateNewMessageAC(newText));
    };

    const addMessageCallback = () => {
        props.dispatch(addMessageAC(props.newMessageText));
    };

    return (
        <Dialogs dialogs={props.dialogs} messages={props.messages} newMessageText={props.newMessageText} addMessageCallback={addMessageCallback}
                 onChangeMessageCallback={onChangeMessageCallback}/>
    );
};

export default DialogsContainer;