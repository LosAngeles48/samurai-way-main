import React from 'react';
import s from './../Dialogs.module.css';

export type PropsMessage = {
    text: string
}

const Message = (props: PropsMessage) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default Message;