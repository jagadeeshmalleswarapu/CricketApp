import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../css/search.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30zljbv",
        "template_45hpjmm",
        form.current,
        "R8ql0hdFIbM6g8JJM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="searchback" style={{height:'700px'}}>
    <br/>
    <br/>
    <h1 className="text-center">
      <span className="">

      <span className="text-white">

      ContactUs
      </span>
      </span>
    </h1>
      <br />
      <div>
        <div className="container col-4" id="imgpro">
          <br />

          <form className="form-group" ref={form} onSubmit={sendEmail}>
            <div className="md-3 col-9">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                <b>Full Name</b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                name="full-name"
                required
              />
            </div>

            <div className="md-3 col-9">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                <b>Email</b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Email Address"
                name="user-email"
                required
              />
            </div>

            <div className="md-3 col-9">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                <b>Message</b>
              </label>
              <textarea
                className="form-control"
                type="text"
                placeholder="Message..."
                name="message"
                required
              />
            </div>

            <br />
            <div id="buttonlog">
              <input
                className="btn btn-primary col-5"
                type="submit"
                value="Send"
              />
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
