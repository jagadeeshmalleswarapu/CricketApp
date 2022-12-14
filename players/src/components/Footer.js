import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <h5>
        <a href="#" id="start" class="acr">
          Privacy and Cookies{" "}
        </a>
        <a href="#" class="acr">
          {" "}
          Legal{" "}
        </a>
        <a href="#" class="acr">
          {" "}
          Advertise{" "}
        </a>
        <a href="#" class="acr">
          {" "}
          Help{" "}
        </a>
        <a href="#" class="acr">
          {" "}
          Feedback{" "}
        </a>
        <a href="https://www.emids.com" class="acr">
          {" "}
          @ 2022 Emids.com{" "}
        </a>
      </h5>
      <br />
      <hr />
    </div>
  );
}

export default Footer;
