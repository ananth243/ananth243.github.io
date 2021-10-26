import React from 'react'
import pic from "../../assets/img/campus.jpeg";

function Card(props) {
    return (
        <div className="relative mx-3 my-3 flex flex-col min-w-0 break-words bg-clip-border border-2">
            <img src={pic} alt="" />
            <h5>{props.name}</h5>
            <button>Visit</button>
        </div>
    )
}

export default Card
