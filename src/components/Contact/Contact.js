import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

function Contact() {
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

  function formSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080", {
        name,
        email,
        message,
      })
      .then((res) => {
        setStatus(res.data.status);
        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch((err) => {
        const { emailError, messageError, nameError } = err.response.data;
        setEmailError(emailError);
        setMessageError(messageError);
        setNameError(nameError);
      });
  }
  return (
    <>
      <div id="d1"></div>
      <div className="flex justify-center mt-6 mb-6">
        <div
          id="contact"
          className="text-black bg-white flex justify-center flex-wrap md:justify-around md:container rounded-xl py-6"
        >
          <div className="flex flex-col" style={{ width: "45%" }}>
            <p className="text-center">
              I'm available for any paid oppurtunities and always am open to
              learn new things and from my mistakes. Here are my socials if you
              want to reach me from here
            </p>
            <ul className="flex justify-around my-5 sm:my-40">
              <li>
                <a href="https://www.linkedin.com/in/ananth-raghav-2151a9200/">
                  <FontAwesomeIcon color="blue" size="2x" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/the_nerd.athelte/">
                  <FontAwesomeIcon color="red" size="2x" icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100071905522375">
                  <FontAwesomeIcon color="blue" size="2x" icon={faFacebook} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-center my-2 md:my-0">CONTACT ME</h1>
            <form
              onSubmit={formSubmit}
              className="flex flex-col items-center my-4"
            >
              <h4 className="bg-blue-regal">{status}</h4>
              <div className="my-3 flex ">
                <label htmlFor="name" className="mr-3">
                  Name
                </label>{" "}
                <input
                  type="text"
                  className="box-border border-2 "
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <span className="text-red-600">{nameError}</span>
              <div className="my-3 flex">
                <label htmlFor="email" className="mr-4">
                  Email
                </label>
                <input
                  type="email"
                  className="box-border border-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <span className="text-red-600">{emailError}</span>
              <div className="my-3 flex">
                <label htmlFor="message" className="mr-2">
                  Message
                </label>
                <input
                  type="text"
                  className="box-border border-2"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <span className="text-red-600">{messageError}</span>
              <button
                className="bg-green-500 h-10 hover:bg-green-400 text-white my-5"
                style={{ width: "40%" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
