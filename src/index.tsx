import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dialogs from './components/Dialogs/Dialogs';

type messagesType = {
    id: number
    messages: string
}

type DialogType = {
    id:number
    name:string
}

type PostType = {
    id:number
    messages:string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<messagesType>
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    // sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, messages: 'Hi, how are you?', likesCount: 10},
            {id: 2, messages: 'This is my first post', likesCount: 20}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dmitry'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Ksenia'}
        ],

        messages: [
            {id: 1, messages: 'Hi'},
            {id: 2, messages: 'Hello'},
            {id: 3, messages: 'Gays'},
            {id: 4, messages: 'GG'}
        ]
    }
}

ReactDOM.render(
    <App posts={state.profilePage.posts} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>,
    document.getElementById('root')
);

