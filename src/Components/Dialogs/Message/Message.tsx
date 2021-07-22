import s from "../Dialogs.module.css";
import React from "react";

type PropsType = {
    message: string
}

const Message = (props: PropsType) => {
    return (
        <div className={s.message}>{props.message}</div>

    );
};

export default Message;