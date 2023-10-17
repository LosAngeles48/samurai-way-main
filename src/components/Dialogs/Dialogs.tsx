import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type PropsDialogItem = {
    name: string
    id: number
}

const DialogItem = (props: PropsDialogItem) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export type PropsMessage = {
    text: string
}


const Message = (props: PropsMessage) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Ksenia'}
    ]

    let messages = [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'Hello'},
        {id: 3, messages: 'Gays'},
        {id: 4, messages: 'GG'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message text={m.messages}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}