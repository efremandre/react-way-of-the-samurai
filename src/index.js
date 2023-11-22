import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (store) => {

    root.render(<App store={store}/>);
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);
reportWebVitals();