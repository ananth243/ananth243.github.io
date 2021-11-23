import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send } from "emailjs-com";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import copy from "copy-to-clipboard";

function Contact() {
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function Copied() {
    copy("raghavananth02@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  async function formSubmit(data) {
    const { name, email, message } = data;

    setLoading(true);
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setLoading(false);
      setStatus("Message successfully delivered");
      setTimeout(() => {
        setStatus("");
      }, 2000);
      reset();
    } catch (e) {
      console.log(e);
    }
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
              onSubmit={handleSubmit(formSubmit)}
              noValidate
              className="flex flex-col items-center my-4"
            >
              <h4 className="text-blue-regal">{status}</h4>
              {loading && (
                <h4 className="my-2">
                  <div className="spinner-border"></div>
                </h4>
              )}
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>
                      <input
                        type="text"
                        className="box-border border-2 "
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {errors.name && (
                        <span className="text-red-600">
                          Please fill this field
                        </span>
                      )}
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Email</td>
                    <td>
                      <input
                        type="text"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="box-border border-2 "
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {errors.email && (
                        <span className="text-red-600">
                          Please enter a valid email
                        </span>
                      )}
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Message</td>
                    <td>
                      <textarea
                        rows={3}
                        className="box-border min-w-full border-2 "
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {errors.message && (
                        <span className="text-red-600">
                          Please enter this field
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
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
