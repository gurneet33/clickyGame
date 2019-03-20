import React from "react";
import './style.css'

function Navbar(props) {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light ">
            <div className="row header">
                <h3 id="nav-title" className="navbar-item">Clicky Game</h3>
                <h3 id="nav-guess" className="navbar-item justify-center">{props.guess}</h3>
                <h3 id="nav-score" className="navbar-item">Score:{props.count}</h3>
                <h3 id="nav-score" className="navbar-item">Top Score:{props.high}</h3>
            </div>
        </nav>
    )
}

export default Navbar;