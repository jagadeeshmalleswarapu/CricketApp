import React from "react";
import { Link } from "react-router-dom";
// import "../bgimg.css";
import '../css/HomeStyle.css'
import Logo from '../img/Logo.png'
import jagadeesh from '../img/1656519421271.jpg'
import kanakaraj from '../img/20211002_123115.jpg'
import ganesh from '../img/IMG_20200113_210638_185.jpg'

function Home() {
  return (
    <div>
    
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>Cricket Player App</h4>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>{" "}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="iten">
                <a href="/" aria-current="page" className="hvr-bounce-to-right">
                  Home
                </a>{" "}
              </li>
              <li className="nav-item" id="iten">
                <Link to="/register" className="hvr-bounce-to-right">
                  Register
                </Link>{" "}
              </li>
              <li className="nav-item" id="iten">
                <Link to="/login" className="hvr-bounce-to-right">
                  Login
                </Link>
              </li>
            </ul>
            <span class="nav-item">
            <Link to='/contact' className="btn">ContactUs</Link>
            </span>
          </div>
        </div>
      </nav>
        {/* <hr/> */}
     

      <section id="welcome-section">
        <header id="#about"> 
        <div id="rightside">
<br/>
      <div className="container"style={{paddingTop:'40px',
      paddingLeft:'20px'}} >
    <span id="welcome" style={{color:'ThreeDDarkShadow',
      fontSize:'320%',
      }}>

        Welcome to the Cricket Duniya!!!
    </span>
        <br/>
      <h2><i style={{color:'navy',paddingLeft:'180px'}}> 

    Champions are not made Overnight...
      </i>
      </h2><br/><br/>
      <div className="my-cardhome col-4" id="trans">
      
      <div class="">
<h4>
    "  In cricket, you cannot be born as a hero, but you can be made one. The only secret weapon is hard work.  "
</h4>
      </div>
      </div>
<div  style={{paddingLeft:'200px'}}>

      <div className="my-cardhome col-6" id="trans">
      
      <div class="">
<h4>
“Cricket is the only sport in the world where you are absolutely horrible at something and you still need to go out and do it. “
</h4>
      </div>
</div>
      </div>
     
      </div>

            <img src={Logo} alt="logo" id="logo" />
        </div>           
        </header>
    </section>


    <div id="projects">
<section>
<h1><b>ABOUT US</b></h1>
<br/>
<h5><b>" OUR GOAL IS TO PROVIDE YOU WITH THE BEST ENTERTAINMENT AROUND "</b></h5>
<br/>
<br/>
<br/>
        <h1><b>OUR TEAM</b></h1>
        <div class="project">
            

            <div class="project-title2">
            <img src={jagadeesh} style={{width:'250px',height:'350px'}} alt="Javascript Documents" class="project-img"/>
                <h3>Malleswarapu Jagadeesh</h3>
                <h4>Associate Software Engineer</h4>
            </div>

            <div class="project-title3">
            <img src={kanakaraj} style={{width:'250px',height:'350px'}} alt="Ramanuj Tribute Page" class="project-img"/>
                    <h3>Kanakaraj J</h3>  
                <h4>Associate Software Engineer</h4>
               
            </div>
            <div class="project-title3">
            <img src={ganesh} style={{width:'250px',height:'350px'}} alt="Ramanuj Tribute Page" class="project-img"/>
                    <h3>Kala Ganesh</h3>
                <h4>Associate Software Engineer</h4>
               
            </div>
    </div></section>
        </div>
    <div>

    <section id="social">
        <h1>Wanna Have A Word With Me?</h1>
        <h3>You Can Find Me On...</h3>
        <div>
            <a class="hvr-float" id="profile-link" href="https://twitter.com/agadeesh0531" target="_blank"><i class="fab fa-twitter"></i>Twitter</a>
            <a class="hvr-float" id="profile-link" href="https://www.linkedin.com/in/jagadeesh-malleswarapu-aaaa3912b/"><i class="fab fa-linkedin-in"></i>Linkedin</a>
            <a class="hvr-float" id="profile-link" href="https://github.com/isurojit"><i class="fab fa-github"></i>Github</a>
            <a class="hvr-float" id="profile-link" href="mailto://jagadeeshone2@gmail.com"><i class="fas fa-envelope-open-text"></i>Email me</a>
            <a class="hvr-float" id="profile-link" href="tel:+917013770666"><i class="fas fa-mobile-alt"></i>Over Call?</a>
        </div>
    </section>
    <footer id="foot">
        <h4>Thanks for visiting. For more info please visit our company <a className="h3" href="https://www.emids.com" target="_blank">@EMIDS</a></h4>
    </footer>

    </div>





    </div>
  );
}

export default Home;
