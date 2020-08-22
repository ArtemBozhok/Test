import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="site-container container">
                    <Nav/>
                    <div className="siteContent">
                        <Route path='/profile' component={Profile}/>
                        <Route path='/messages' component={Dialogs}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
