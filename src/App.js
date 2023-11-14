import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

function App() {
    return (
        <div className="grid">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;