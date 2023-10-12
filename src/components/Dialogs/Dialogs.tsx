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
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Dmitry' id={1}/>
                <DialogItem name='Sasha' id={2}/>
                <DialogItem name='Valera' id={3}/>
                <DialogItem name='Ksenia' id={4}/>

            </div>
            <div className={s.messages}>
                <Message text='Hi'/>
                <Message text='Hello'/>
                <Message text='Gays'/>
                <Message text='GG'/>

            </div>
        </div>
    )
}