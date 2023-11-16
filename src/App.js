import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = ({posts, dialogs, messages}) => {
    return (
        <div className="grid">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <main className='main'>
                    <Routes>
                        <Route path='/profile' element={<Profile posts={posts}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;