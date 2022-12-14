import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import GetNewsService from "../services/GetNewsService";
import Footer from "./Footer";
import NavBar from "./NavBar";

function News() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('jagadeesh')){
      navigate('/login')
    }
  },[])

  const [news, setNews] = useState([]);
  useEffect(() => {
    GetNewsService.getService("news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div id="searchback">
      <div>
        <NavBar/>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="container">
        <h1 className="text-white">Latest News</h1>
      </div>
      <div>
      <div className="col-sm-6">
      <div className="d-flex">
      <div style={{
        paddingLeft:"150px"
      }}>
        <table style={{
          width:"500px"
        }} className="table table-striped" >
          <thead className="table-dark">
            <tr>
              <td>Contents</td>
            </tr>
          </thead>
          {news.map((temp) => 
            <tbody className="table-warning border border-dark">
              <tr>
                <td><span className="h3">- </span>{temp.news}</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <div style={{
        paddingLeft:"20px"
      }}>
      <iframe width="500" height="300" src="https://www.youtube.com/embed/sgC5IpWKJNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

      </iframe>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1QQrcTik1qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
      </div>
      </div>
    </div>
    <br/><br/>
    </div>
  );
}

export default News;
