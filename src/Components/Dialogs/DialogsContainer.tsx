import React from "react";
import {addMessage, DialogsPageType, updateNewMessageText} from "../../redux/DialogsReducer";
import {RootStateType} from "../../redux/ReduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateMessageText: (newText: string) => void
    addMessage: (newMessageText: string) => void

}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    };
};


const DialogsContainer = connect(mapStateToProps, {updateMessageText: updateNewMessageText, addMessage})(Dialogs);

export default DialogsContainer;