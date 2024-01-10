import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import UsersContainer from "./components/users/UsersContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = () => {
    return (
        <div className="grid">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <main className='main'>
                    <Routes>
                        <Route path='/'
                               element={<News/>}/>
                        <Route path='/profile/:userId?'
                               element={<ProfileContainer/>}/>
                        <Route path='/users'
                               element={<UsersContainer />}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer />}/>
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