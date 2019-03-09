import React from "react";
import "./style.css";

function CardHolder(props) {
    return (
        <div>
            <div className="card col-3">
                <div className="img-container">
                    <img onClick={() => { props.shuffle(props.id) }} alt="img" src={props.image} />
                </div>
            </div>
        </div>

    )
}

export default CardHolder;