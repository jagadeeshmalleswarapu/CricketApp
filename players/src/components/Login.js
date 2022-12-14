import React, { useEffect, useState } from "react";
import LoginService from "../services/LoginService";
import {Link,useNavigate} from "react-router-dom";
import "../center.css"
import Footer from "./Footer";

function Login() {
  const navigate = useNavigate();
useEffect(()=>{
  if(localStorage.getItem('jagadeesh')){
    navigate('/nav')
  }
},[])

  const [logemail, setlogEmail] = useState({
    usernameOrEmail:"",
    password:""
  });
const [error, setError] = useState('')

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setlogEmail({ ...logemail, [e.target.name]:value})
  }
  const onLoginClick = (e)=>{
    e.preventDefault()
    LoginService.loginForm(logemail).then((res)=>{
      // console.log('Logged in',res);
      if(res.status === 200){
        alert(`You are Logged in successfully Welcome to the Cricket World!!!!!`)
        localStorage.setItem('jagadeesh',res.data.token)
        localStorage.setItem('showName',logemail.usernameOrEmail);
        console.log(res.data);
        navigate('/nav')
        
        // window.location.href = "/profile"
      }
      else{
        alert('Invalid credentials')
      }
    }).catch((error)=>{
      if(error.response.status === 401){
        setError('Invalid Credentials. Please enter valid credentials.')
        console.log(error);
        // alert('Invalid credentials')
      }
    })
  }

  return (
    <div id="logdark">

    <div id="loginid">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light text-white">
          {/* <span className="span"><h2 className="fas fa-headphones-alt"></h2></span> */}
          <div className="container-fluid">
            <h1>Cricket Player App</h1>
          </div>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <button  className=" btn btn-outline-white">
              <a href="/" className="nav-link text-white">Home</a></button>
            </li>{" "}<span> </span>
            <li className="nav-item">
              <button  className=" btn btn-outline-white">
              <Link to="/register" className="nav-link text-white">Register</Link></button>
            </li>
          </ul>
        </nav>
        <br /><br/>
        {/* {error.map((er)=>er.)} */}
        {/* <br /><br/> */}

        <div id="imgpro1">
      <div className="container col-6 text-dark"  id="imgpro"><br/>
      <div className="">
        <span style={{
          color:'darkred',
          fontStyle:'italic',
          padding:'1vw',
          fontWeight:'bold'
        }}>
        {error}
        </span>
    <h1 style={{paddingTop:'1vw'}}>Login Page</h1>
    <br/>
      <form className="form-group">
      <div className="md-3 col-9">
      <label htmlFor="exampleInputEmail1" className="form-label "><b>Email</b></label>
      <input className="form-control" 
       type="text" placeholder="email" name="usernameOrEmail" required onChange={(e)=>onChangeEmail(e)} />
       </div>
       <div className="md-3 col-9">
      <label htmlFor="password" className="form-label "><b>Password</b></label>
      <input className="form-control" 
      type="password" placeholder="password" required name="password" onChange={(e)=>onChangeEmail(e)} />
      </div>
      <div id="emailHelp" className="form-text text-dark">We'll never share your email and password with anyone else.</div>
      <br/>
      <div id="buttonlog">

      <button  className="btn btn-primary col-5" onClick={(e)=>onLoginClick(e)}>Login</button>
      </div>
      </form><br/>
</div>
</div>
    </div>
    </div>
    <br/>
  
    
    </div>
    </div>
  );
}

export default Login;
