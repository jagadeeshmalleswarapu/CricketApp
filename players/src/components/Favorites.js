import React, { useEffect, useState } from "react";
import GetFavoriteService from "../services/GetFavoriteService";
import "../center.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Favorites() {

  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('jagadeesh')){
      navigate('/login')
    }
  },[])

  const [fav, setFav] = useState([]);
  useEffect(() => {
    GetFavoriteService.getService("all")
      .then((response) => {
        setFav(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const onUnlike = (e) => {
    e.preventDefault();
    const id = e.target.name;
    GetFavoriteService.getDeleteService("del/" + id)
      .then((res) => {
        alert("You Unliked Successfully")
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="searchback">
          <NavBar />
        <div>

          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="container">
          <h1 className="text-white">Favorites</h1>
          <br />
          {/* <ul>
        {
          fav.map((n)=> <li>{n.fullName}</li>)
        }
      </ul> */}

          <div>
            <div className="row">{fav.map((temp) => (
                <div className="col">
                  <div className="container">
                    <div
                      className="card mainfav"
                      style={{ width: "20rem", height: "25rem" }}
                    >
                      <div className="card-body">
                        <img
                          src={temp.img}
                          alt="Avatar"
                          // width="300rem"
                          // height="300rem"
                          className="img-fluid"
                        />
                        <h5 className="card-title">{temp.fullName}</h5>
                        <p className="card-text">
                          <b>Major Team:</b> {temp.majorTeam}
                        </p>
                        <p className="card-text">
                          <b>Country Name:</b> {temp.countryName}
                        </p>
                        <button
                          type="button"
                          name={temp.id}
                          onClick={(e) => onUnlike(e)}
                          className="my-card-btnr"
                        >
                          Unlike
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  );
}

export default Favorites;
