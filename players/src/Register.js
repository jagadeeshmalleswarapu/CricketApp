import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import SaveRegisterService from "./services/SaveRegisterService";
import './center.css';
import Footer from "./components/Footer";
const Register = () => {

  useEffect(()=>{
    if(localStorage.getItem('jagadeesh')){
      navigate('/nav')
    }
  },[])

  const [login, setlogin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setlogin({ ...login, [e.target.name]: value });
  };
  const navigate = useNavigate();
  const saveLogin = (e) => {
    e.preventDefault();
    SaveRegisterService.saveLog(login)
    .then((response) => {
      console.log("added");
      if(response.status === 200){
        alert('Registered successfully')
        navigate('/login')
      }
    })
    .catch((error) => {
      console.log(error);
      if(error.response.status === 400){
        alert('Email already exists')
      }
      else if(error.response.status === 500){
        alert('Please fill the required fields')
      }
    });

  };

  return (
    <div id="logdark">
      <nav className="navbar navbar-expand-lg navbar-light text-white">
          <div className="container-fluid">
            <h1>Cricket Player App</h1>
          </div>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <button  className=" btn btn-outline-white">
              <a href="/" className="nav-link text-white">Home</a></button>
            </li>
            <li className="nav-item">
              <button  className=" btn btn-outline-white">
              <Link to="/login" className="nav-link text-white">Login</Link></button>
            </li>
          </ul>
        </nav>
      <br />
      <div className="container col-5 text-dark" id="imgpro"><br/>
    <h1>Registration Page</h1>
    <br/>
      <form className="form-group">
      <div className="md-3 col-9">
      <label htmlFor="firstName" className="form-label "><b>First Name</b></label>
      <input className="form-control" 
          onChange={(e) => handleChange(e)}
          placeholder="firstName"
          name="firstName"
          required
          type="text"
        />
        </div>
      <div className="md-3 col-9">
      <label htmlFor="lastName" className="form-label"><b>Last Name</b></label>
        <input className="form-control"
          onChange={(e) => handleChange(e)}
          placeholder="lastName"
          name="lastName"
          required
          type="text"
        />
        </div>
      <div className="md-3 col-9">
      <label htmlFor="email" className="form-label"><b>Email Address</b></label>
        <input className="form-control"
          onChange={(e) => handleChange(e)}
          placeholder="email"
          name="email"
          required
          type="email"
        />
        </div>
      <div className="md-3 col-9">
      <label htmlFor="password" className="form-label"><b>Password</b></label>
        <input className="form-control"
          onChange={(e) => handleChange(e)}
          placeholder="password"
          required
          name="password"
          type="password"
        />
        <div id="passwordHelpBlock" className="form-text text-dark">
  <b>-</b> Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
        </div>
        <div id="emailHelp" className="form-text text-dark"><b>-</b> We'll never share your email and password with anyone else.</div>
        <br/>
        <div id="buttonlog">
        <button className="btn btn-primary col-5" onClick={(e) => saveLogin(e)}>Register</button>
        </div>
      <br/>
      </form>
      </div>
      <br/><br/>
      <br/><br/>
    </div>
  );
}

export default Register;
