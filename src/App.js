import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Sidebar/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="site-container container">
                    <Sidebar state={props.state.sidebar}/>
                    <div className="siteContent">
                        <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                        <Route path='/messages' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
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
