import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub as github } from "@fortawesome/free-brands-svg-icons";

function Card(props) {
  return (
    <div className="mx-3 my-3 flex flex-col min-w-0 break-words bg-clip-border border-2 rounded-xl">
      <video src={props.video} style={{height:"75%"}} autoPlay muted loop />
      <div className="my-5 flex flex-col items-center">
        <h5>{props.name}</h5>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.url}
          className="box-border text-center hover:bg-blue-400 bg-blue-500  w-16 mb-5 my-3 rounded-lg"
        >
          Visit
        </a>
        <a target="_blank" rel="noreferrer" href={props.github}>
          <FontAwesomeIcon color="white" size="3x" icon={github} />
        </a>
      </div>
    </div>
  );
}

export default Card;
