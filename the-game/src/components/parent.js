import React, { Component } from 'react';
import CardHolder from './CardHolder';
import Navbar from './Navbar'
import StaticBack from './StaticBack';


const Parent = (props) => {

    return (
        <div>
            <Navbar {...props} />
            <StaticBack />
            <CardHolder {...props} />
        </div>
    )
}



export default Parent;