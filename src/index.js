import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {

    root.render(<App state={state}
                     dispatch={store.dispatch.bind(store)}
    />);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();