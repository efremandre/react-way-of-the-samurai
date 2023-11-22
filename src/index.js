import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {

    root.render(<App state={state}
                     addPost={store.addPost.bind(store)}
                     changeInputPost={store.changeInputPost.bind(store)}
                     submitMessage={store.submitMessage.bind(store)}
                     changeInputMessage={store.changeInputMessage.bind(store)}
    />);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();