import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/redux-store';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});

reportWebVitals();