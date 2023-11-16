import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Anna'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Dima'},
    {id: 6, name: 'Sergey'}
]

const messages = [
    {id: 1, message: 'Yo'},
    {id: 2, message: 'hi!'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'fine and you?'},
]

const posts = [
    {id: 1, name: 'Kate', like: 10, dislike: 0, text: 'Hi', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
    {id: 2, name: 'Tom', like: 11, dislike: 5, text: 'Hello', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
    {id: 3, name: 'Dave', like: 5, dislike: 2, text: '....', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

reportWebVitals();
