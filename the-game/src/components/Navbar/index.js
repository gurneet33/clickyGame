import React from "react";
import './style.css'

function Navbar(props) {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light ">

            <h3 id="nav-title" className="navbar-item">Clicky Game</h3>
            <div className="row header">
                <h3 id="nav-guess" className="navbar-item">{props.guess}</h3>
                <h3 id="nav-score" className="navbar-item score">Score:{props.count}</h3>
                <h3 id="nav-score" className="navbar-item top-score">Top Score:{props.high}</h3>
            </div>
        </nav>
    )
}

export default Navbar;