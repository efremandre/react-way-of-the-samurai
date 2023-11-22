import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {changeInputMessage} from "./redux/state";

const App = (props) => {

    return (
        <div className="grid">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <main className='main'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePage={props.store.state.profilePage}
                                                 addPost={props.store.addPost}
                                                 changeInputPost={props.store.changeInputPost}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs dialogsPage={props.store.state.dialogsPage}
                                                 submitMessage={props.store.submitMessage}
                                                 changeInputMessage={props.store.changeInputMessage}/>}/>
                        <Route path='/news'
                               element={<News/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;