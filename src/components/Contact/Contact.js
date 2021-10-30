import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  function formSubmit(e) {
    e.preventDefault();
    console.log(message, email, name);
    fetch("https://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  return (
    <div
      id="contact"
      className="text-black bg-white flex justify-center flex-wrap md:justify-around mx-10 container rounded-xl py-6"
    >
      <div className="flex flex-col" style={{ width: "45%" }}>
        <p className="text-center">
          I'm available for any paid gigs and always am open to learn new things
          and from my mistakes. Here are my socials if you want to reach me from
          here
        </p>
        <ul className="flex justify-around my-5">
          <li>
            <a href="https://www.linkedin.com/in/ananth-raghav-2151a9200/">
              <FontAwesomeIcon color="blue" size="2x" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/the_nerd.athelte/">
              <FontAwesomeIcon color="red"  size="2x" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100071905522375">
              <FontAwesomeIcon color="blue"  size="2x" icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-center my-2 md:my-0">CONTACT ME</h1>
        <form onSubmit={formSubmit} className="flex flex-col items-center my-4">
          <div className="my-3">
            <label htmlFor="name" className="mr-3">
              Name
            </label>{" "}
            <input
              type="text"
              className="box-border border-2 "
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="mr-4">
              Email
            </label>
            <input
              type="email"
              className="box-border border-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="message" className="mr-2">
              Message
            </label>
            <input
              type="text"
              className="box-border border-2"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 text-white my-5"
            style={{ width: "40%" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
