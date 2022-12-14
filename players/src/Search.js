// import { Alert } from "bootstrap";
import React from "react";
// import { Link } from "react-router-dom";
// import GetServiceByName from "./services/GetServiceByName";
import "../src/css/style.css";
import "../src/css/search.css";
import ApiGateWay from "./services/ApiGateWay";

function Search() {
  const [fullName, setPlayer] = React.useState("");
  const [player, setPlayerData] = React.useState({
    id: "",
    fullName: "",
    countryName: "",
    majorTeam: "",
    img: "",
  });

  const [playerList, setPlayerList] = React.useState([]);

  const handleChange = async (event) => {
    setPlayer(event.target.value);

    await ApiGateWay.getService("cards/all")
      .then((response) => {
        setPlayerList(response.data);
        // console.log(playerList.map((player) => player.fullName));
      })
      .catch((error) => {
        console.log(error);
      });
    //  console.log("inside handlechange",playerList);
  };

  const onLike = (event) => {
    console.log("inside like", event.target.value);
    ApiGateWay.getService("cards/fav/" + player.id)
      .then((response) => {
        alert(fullName + " is Liked");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRecommend = (event) => {
    console.log("inside  Recommend", event.target.value);
    ApiGateWay.getService("cards/rec/" + player.id)
      .then((response) => {
        alert(fullName + " is Recommended");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSearch = (event) => {
    event.preventDefault();

    ApiGateWay.getService("cards/name/" + fullName)
      .then((response) => {
        setPlayerData(response.data);

        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let card = <div></div>;
  if (player.fullName) {
    card = (
      // <div className="container text-center">

      <div class="container d-flex justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="my-card">
            <img class="my-card-img" src={player.img} alt={player.fullName} />
            <div class="my-card-body trainer-card-body">
              <h5 className="card-title">{player.fullName}</h5>
              <p className="card-text">
                <b>Major Team:</b> {player.majorTeam}
                <br />
                <b>Country Name:</b> {player.countryName}
                <br />
                <br />
                <button
                  className="my-card-btn"
                  id="liked"
                  onClick={(e) => {
                    onLike(e);
                  }}
                >
                  Like
                </button>
                <span> </span>
                <button
                  className="my-card-btnr"
                  onClick={(e) => {
                    onRecommend(e);
                  }}
                >
                  Recommend
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    // </div>
  }
  // else {
  //   card = (
  //     <div>
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-md-6"></div>
  //           <div class="alert alert-warning fade show text-center" role="alert">
  //             Invalid Search. Please enter correct name
  //             {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  //           </div>
  //         </div>
  //       </div>{" "}
  //     </div>
  //   );
  // }
  // else {
  // // add alert to array
  // setAlerts(alerts => ([...alerts, alert]));

  // // auto close alert if required
  // if (alert.autoClose) {
  //     setTimeout(() => removeAlert(alert), 3000);
  // }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="container col-4">
          <div class="input-group">
            <input
              onChange={(e) => handleChange(e)}
              type="search"
              id="bar"
              list="ShowDataList"
              placeholder="Type to search..."
              className="form-control rounded"
              aria-label="Search"
              aria-describedby="search-addon"
            />

            <datalist id="ShowDataList" className="dataLists">
              {playerList.map((player) => (
                <option value={player.fullName}>{player.fullName}</option>
              ))}
            </datalist>

            <button
              onClick={(e) => {
                onSearch(e);
              }}
              type="button"
              id="btnbtn"
              class="btn btn-warning"
            >
              search
            </button>
          </div>
        </div>
      </div>
      <br />

      <div>{card}</div>
    </div>
  );
}

export default Search;
