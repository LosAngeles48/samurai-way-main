import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

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

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    posts:Array<PostType>
    dialogs: Array<DialogType>

}


 const App = (props:RootStateType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile posts={props.posts} />}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.dialogsPage.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
