import React, {useRef} from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';
import {DialogPageType} from '../../Redux/state';

export type DialogsPropsType = {
    dialogsPage: DialogPageType


}

export const Dialogs = (props:DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.messages}/>)



    let newMessage = useRef<HTMLTextAreaElement>(null)

    const sendMessage = () => {
        if (newMessage.current !== null) {
            alert(newMessage.current.value)
        }
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs