import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPostCallBack={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);

