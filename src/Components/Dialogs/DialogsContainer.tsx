import React from "react";
import {addMessageAC, DialogsPageType, updateNewMessageAC} from "../../redux/DialogsReducer";
import { RootStateType} from "../../redux/ReduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateMessageText: (newText: string) => {
            dispatch(updateNewMessageAC(newText))
        },
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;