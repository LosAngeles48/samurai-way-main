import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type messagesType = {
    id: number
    messages: string
}

export type DialogType = {
    id:number
    name:string
}

export type PostType = {
    id:number
    messages:string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<messagesType>
}

export type SidebarType = {}

export type RootStateType = {
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
    <App state={state}/>,
    document.getElementById('root')
);




// posts={state.profilePage.posts} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}