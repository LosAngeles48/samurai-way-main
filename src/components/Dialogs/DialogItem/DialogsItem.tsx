import React from 'react';
import s from './../Dialogs.module.css';
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

export default DialogItem;
