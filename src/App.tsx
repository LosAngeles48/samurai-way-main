import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import { RootStateType} from './Redux/state';

export type AppStateType = {
    state:RootStateType
}

 const App = (props:AppStateType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}  />}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.messagesPage}  />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
