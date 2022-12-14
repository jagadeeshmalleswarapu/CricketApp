import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../Search";
import Footer from "./Footer";
// import HomeFooter from "./HomeFooter";
import NavBar from "./NavBar";
import '../css/search.css'

function InsideNav() {
 const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('jagadeesh')){
      navigate('/login')
    }
  },[])
  return (
    <div id="searchback" style={{
      height:'700px',
    }}>
      <NavBar />
      <Search />
     
    </div>
  );
}

export default InsideNav;
