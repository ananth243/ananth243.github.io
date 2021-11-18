import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import copy from "copy-to-clipboard";

function Contact() {
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  function Copied() {
    copy("raghavananth02@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://ananth243.herokuapp.com", {
        name,
        email,
        message,
      })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setEmailError("");
        setMessageError("");
        setNameError("");
        setStatus(res.data.status);
        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch((err) => {
        setLoading(false);
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
              learn new things and improve. Here are my socials if you want to
              reach me from here
            </p>
            <ul className="flex justify-around my-5 sm:my-8">
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
            <p className="my-5">
              If you want to schedule an appointment, my{" "}
              <a
                target="_blank"
                className="text-blue-500"
                rel="noreferrer"
                href="https://calendar.google.com/calendar/u/0?cid=ZjIwMjAxNzk3QGdvYS5iaXRzLXBpbGFuaS5hYy5pbg"
              >
                calendar
              </a>{" "}
              is public so you can send an invite to this{" "}
              <code
                className="text-md font-sans text-blue-500"
                onClick={() => Copied()}
              >
                email{" "}
              </code>
              address
            </p>
            {copied && (
              <span className="text-blue-700 text-md">
                Email copied to clipboard
              </span>
            )}
          </div>
          <div>
            <h1 className="text-center my-2 md:my-0">CONTACT ME</h1>
            <form
              onSubmit={formSubmit}
              className="flex flex-col items-center my-4"
            >
              <h4 className="text-blue-regal">{status}</h4>
              <h4>{loading && <div className="spinner-border"></div>}</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>
                      <input
                        type="text"
                        className="box-border border-2 "
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <span className="text-red-600">{nameError}</span>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Email</td>
                    <td>
                      <input
                        type="text"
                        className="box-border border-2 "
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <span className="text-red-600">{emailError}</span>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Message</td>
                    <td>
                      <input
                        type="text"
                        className="box-border border-2 "
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <span className="text-red-600">{messageError}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <div className="my-3 flex ">
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
                 */}

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
