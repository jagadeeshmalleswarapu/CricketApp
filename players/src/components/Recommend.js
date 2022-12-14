import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetRecommendService from '../services/GetRecommendService'
import Footer from './Footer'
import NavBar from './NavBar'

function Recommend() {


  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('jagadeesh')){
      navigate('/login')
    }
  },[])
  const [rec, setRec] = useState([])

  useEffect(()=>{
    GetRecommendService.getService("all").then((response)=>{
      setRec(response.data)
    }).catch((error)=>{
      console.log(error);
    })
   })

   const onUnrecommend = (e) =>{
     e.preventDefault()
     const id = e.target.name
     GetRecommendService.getDelete("del/"+id).then((res)=>{
      alert("You Unrecommended Successfully")
       console.log(res);
     }).catch((error)=>{
       console.log(error);
     })
   }
  
  return (
  <>
  <div id="searchback">
    <NavBar/>

      <br/><br/><br/>

      <div >
      <div className="container">
      
      <h1 className='text-white'>Recommendations Section</h1>
      <br/>

      <div className="row">{ rec.map((temp)=>
        <div className="col">
        <div className="container">
        <div className="card mainfav" style={{width:"20rem", height:"25rem"}}>
                <div className="card-body">
                  <img
                    src={temp.img}
                    alt="Avatar"
                    className="img-fluid"
                  />
                  <h5 className="card-title">{temp.fullName}</h5>
                  <p className="card-text">
                    <b>Major Team:</b> {temp.majorTeam}
                  </p>
                  <p className="card-text">
                    <b>Country Name:</b> {temp.countryName}
                  </p>
                  <button type="button" 
                  name={temp.id}
                  onClick={(e) => onUnrecommend(e)}
                  className="my-card-btnr">
                    Unrecommend
                  </button>
                </div>
              </div>
              </div>
        </div>)
        }
              </div>
              </div>

      </div>
      <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </div>
    </>
  )
}

export default Recommend