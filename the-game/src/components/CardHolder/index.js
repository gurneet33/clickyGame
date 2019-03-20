import React, { Component } from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function CardHolder(props) {
    return (
        <div className="container main-container">
            <ul className="list-group">
                <Row>
                    {props.friends.map(result => (
                        <Col size="md-4">
                            <li className="list-group-item" key={result.id}>
                                <div className="card col-8 text-center">
                                    <div className="img-container">
                                        <img onClick={() => { props.shuffle(result.id) }} alt="img" src={result.image} src={result.image} />
                                    </div>
                                </div>
                            </li >
                        </Col>
                    ))
                    }
                </Row>
            </ul >
        </div>


    )
}

export default CardHolder;