import React, { useEffect, useState } from 'react'
import GetRankService from '../services/GetRankService'
import '../css/table.css'
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Rank() {
 
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('jagadeesh')){
      navigate('/login')
    }
  },[])
  const [bat, setBat] = useState([]);
  const [ball, setBall] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(()=>{
    GetRankService.getBat("all").then((res)=>{
      setBat(res.data)
    }).catch((error)=>{
      console.log(error);
    })
  })

  useEffect(()=>{
    GetRankService.getAllRounder("all").then((res)=>{
      setAll(res.data)
    }).catch((error)=>{
      console.log(error);
    })
  })

  useEffect(()=>{

    GetRankService.getBall("all").then((res)=>{
      setBall(res.data)
    }).catch((error)=>{
      console.log(error);
    })
  })
 
 
  return (
    <div id="searchback">
<div>
        <NavBar/>
        <br />
        <br />
        <br />
      </div>
<div className='container'>
<h1 className='text-white'>Rankings</h1>
</div>

<div class="container" >
        <div class="table-responsive" >
            <table class="table text-center">
                <thead>
                    <tr>
                        <th>Batsmen</th>
                        <th>No. of Odi's</th>
                        <th>No. of Test's</th>
                        <th>No. of T20's</th>
                    </tr>
                </thead>
                {
                  bat.map((bt)=>
                <tbody className='table-info'>
                    <tr>
                    <td>{bt.batsman}</td>       
                    <td>{bt.odi}</td>       
                    <td>{bt.test}</td>       
                      <td>{bt.t20}</td>       
                            
                    </tr>
                </tbody>
                )}
            </table>
        </div>


        <div class="table-responsive">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th>Bowler</th>
                        <th>No. of Odi's</th>
                        <th>No. of Test's</th>
                        <th>No. of T20's</th>
                    </tr>
                </thead>
                {
                  ball.map((bl)=>
                <tbody className='table-info'>
                    <tr>
                    <td>{bl.bowler}</td>       
                    <td>{bl.odi}</td>       
                    <td>{bl.test}</td>       
                      <td>{bl.t20}</td>       
                            
                    </tr>
                </tbody>
                )}
            </table>
        </div>



        <div class="table-responsive">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th>AllRounder</th>
                        <th>No. of Odi's</th>
                        <th>No. of Test's</th>
                        <th>No. of T20's</th>
                    </tr>
                </thead>
                {
                  all.map((al)=>
                <tbody className='table-info'>
                    <tr>
                    <td>{al.allRounder}</td>       
                    <td>{al.odi}</td>       
                    <td>{al.test}</td>       
                      <td>{al.t20}</td>       
                            
                    </tr>
                </tbody>
                )}
            </table>
        </div>
    </div>
                  <br/><br/><br/>
                  
    </div>
  )
}

export default Rank