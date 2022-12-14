import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  '../css/score.css'
import GetLiveService from '../services/GetLiveService'
import Footer from './Footer'
import NavBar from './NavBar'



function Score() {
  
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('jagadeesh')){
      navigate('/login')
    }
  },[])

  const [score, setScore] = useState([])
  
  useEffect(()=>{
        GetLiveService.getService("all").then((res)=>{
          setScore(res.data)
          console.log(res.data);
        }).catch((error)=>{
          console.log(error);
        })
  },[])
    return (
    <div id="searchback">
<div>
        <NavBar/>
        <br />
        <br />
        <br />
      </div>
<div className='container'>

<h1 className='text-white'>Live Score</h1>
<br/>

<div>
<div className='d-flex'>

{ score.map((temp)=>
  <div class="mainm">
    <p class="head">{temp.league}<span class="right day"> {temp.day}</span></p><br/>
    <table class="table">
        <tr>
            <td>
                <img class="flag" src={temp.homeTeamPicture} alt="Team-1"/>&emsp;<span>{temp.team1}</span><br/><br/>
                <p class="score">{temp.team1Score}</p>
                <p class="overs">{temp.team1Overs}</p>
            </td>
            <td class="right1">
                <span>{temp.team2}</span>&emsp;<img class="flag" src={temp.awayTeamPicture} alt="Team-2" /><br/><br/>
                <p class="score pak">{temp.team2Score}</p>
                <p class="overs pak">{temp.team2Overs}</p>
            </td>
        </tr>
    </table>
    <center>
        <p class="target"><u>{temp.venue}</u></p>
        <p class="res">{temp.matchStatus}</p>
        <p class="match">{temp.matchNo}</p>
    </center>
</div>)}


</div>


</div>
</div><br/>
    </div>
  )
}

export default Score