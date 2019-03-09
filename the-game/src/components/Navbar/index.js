import React from "react";
import './style.css'

function Navbar(props) {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
            <a id="nav-title" className="navbar-item">Clicky Game</a>
            <a id="nav-guess" className="navbar-item justify-center">You guessed it</a>
            <a id="nav-score" className="navbar-item">Score</a>
        </nav>
    )
}

export default Navbar;