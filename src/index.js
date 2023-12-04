import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/redux-store';
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    root.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
    );
}

rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});

reportWebVitals();