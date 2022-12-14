// import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import React from "react";
import './App.css';
import Login from './components/Login';
import Register from './Register';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/alert'
import InsideNav from "./components/InsideNav";
import Favorites from "./components/Favorites";
import Recommend from "./components/Recommend";
import News from "./components/News";
import Stat from "./components/Stat";
import Rank from "./components/Rank";
import Score from "./components/Score";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nav" element={ <InsideNav/> } />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/recommend" element={<Recommend/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/stat" element={<Stat/>}/>
        <Route path="/rank" element={<Rank/>}/>
        <Route path="/score" element={<Score/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="*" element={
          <main style={{ padding: "1rem", color:'darkred',textAlign:'center' }}>
          <div className="container" style={{backgroundColor:'lightgoldenrodyellow'}}>
            <br/>
            <br/>
            <br/><br/><br/><hr/><br/>
          <h3>There's nothing here!....</h3><br/>
          <h1>404-Error Page Not Found</h1>
          <h5>Please go back...!!!</h5>
          <br/><br/>
            <hr/>
          <br/><br/>
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          </div>
        </main>
        }/>
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
