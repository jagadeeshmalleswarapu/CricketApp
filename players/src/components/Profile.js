import React, { useEffect, useState } from "react";
// import SaveRegisterService from '../services/SaveRegisterService'
import ProfileService from "../services/ProfileService";
import pic from '../img/2246811_user_person_profile_icon.png'
function Profile() {
  const [dataP, setData] = useState([]);
  //   const [email, setEmail] = useState('')
  useEffect(() => {
    ProfileService.getProfile(localStorage.getItem("showName").toString())
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="searchback" style={{height:'700px'}}>
    <br/><br/>
      <div className="container">
      <div class="container d-flex justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="my-card">
            <br/><div style={{
              paddingLeft:'20px'
            }}>

              <img src={pic} alt="Profile" style={{height:'800px'}}/>
              <hr/>
          <div>First Name : <b>{dataP.firstName}</b></div><hr/>
          <div>Last Name : <b>{dataP.lastName}</b></div><hr/>
          <div >Email Address : <b>{dataP.email}</b></div><br/>
            </div>
          </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
