import React, { useEffect, useState } from "react";
import GetStatService from "../services/GetStatService";
import "../css/table.css";
import NavBar from "./NavBar";
import HomeFooter from "./HomeFooter";
import { useNavigate } from "react-router-dom";

function Stat() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("jagadeesh")) {
      navigate("/login");
    }
  }, []);

  const [stat, setstat] = useState([]);

  useEffect(() => {
    GetStatService.getService("all")
      .then((res) => {
        setstat(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [stat.length]);

  return (
    <div id="searchback" style={{height:'700px'}}>
      <div>
        <NavBar />
        <br />
        <br />
        <br />
      </div>
      <div className="container">
        <h1 className="text-white">Statistics</h1>
        <br />

        <div className="container">
          <div class="table-responsive">
            <table class="table text-center">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Country</th>
                  <th>Role</th>
                  <th>Matches</th>
                  <th>Runs</th>
                  <th>Average</th>
                  <th>Strike Rate</th>
                  <th>Hundreds</th>
                  <th>Fiftys</th>
                  <th>Wickets</th>
                  <th>Economy</th>
                  <th>Best</th>
                </tr>
              </thead>
              {stat.map((temp) => (
                <tbody className="table-info">
                  <tr>
                    <td>{temp.fullName}</td>
                    <td>{temp.country}</td>
                    <td>{temp.role}</td>
                    <td>{temp.matches}</td>
                    <td>{temp.runs}</td>
                    <td>{temp.average}</td>
                    <td>{temp.strike}</td>
                    <td>{temp.hundreds}</td>
                    <td>{temp.fiftys}</td>
                    <td>{temp.wickets}</td>
                    <td>{temp.eco}</td>
                    <td>{temp.best}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <br />

    </div>
  );
}

export default Stat;
