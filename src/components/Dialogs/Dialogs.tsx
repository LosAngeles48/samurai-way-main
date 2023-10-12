import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type PropsDialogItem = {
    name:string
    id: number
}

const DialogItem = (props:PropsDialogItem) => {
    let  path = "/dialogs/" + props.id
    return  (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

export type PropsMessage = {
    text:string
}


const Message = (props:PropsMessage) => {
    return (
    <div className={s.message}>{props.text}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Ksenia'}
    ]

    let messagesData = [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'Hello'},
        {id: 3, messages: 'Gays'},
        {id: 4, messages: 'GG'}
    ]
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name='Valera' id={3}/>
                <DialogItem name='Ksenia' id={4}/>

            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].messages}/>
                <Message text={messagesData[1].messages}/>
                <Message text='Gays'/>
                <Message text='GG'/>

            </div>
        </div>
    )
}