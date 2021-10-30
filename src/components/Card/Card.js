import React from "react";

function Card(props) {
  return (
    <div className="relative mx-3 my-3 flex flex-col min-w-0 break-words bg-clip-border border-2">
      <video src={props.video} autoPlay muted loop />
      <div className="my-5 flex flex-col items-center">
        <h5>{props.name}</h5>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.url}
          className="box-border text-center hover:bg-blue-400 bg-blue-500  w-16 mb-5 my-3"
        >
          Visit
        </a>
      </div>
    </div>
  );
}

export default Card;
