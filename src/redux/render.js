import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App.js';
import {
    addPost,
    submitMessage,
    changeInputPost,
    changeInputMessage
} from '../redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
    root.render(
        <App state={state}
             addPost={addPost}
             changeInputPost={changeInputPost}
             changeInputMessage={changeInputMessage}
             submitMessage={submitMessage}/>
    );
}