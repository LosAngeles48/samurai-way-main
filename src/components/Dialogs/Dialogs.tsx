import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';

type messagesType = {
    id: number
    messages: string
}

type DialogType = {
    id:number
    name:string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<messagesType>
}

export const Dialogs = (props:DialogPageType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message text={m.messages}/>)

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

export default Dialogs