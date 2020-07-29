import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button";
import "../App.css";

function VyoMain()
{
    return(
        <Jumbotron fluid>
            <p class="sub-head">CONNECTING THE DISCONNECTED</p>
            <h1><span className="highlight">Vyorius</span> brings unmanned robots <span className="highlight">together</span>,
            wherever they are</h1>
            <p>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating.</p>
            <Button className="tryBtn" variant="primary" size="lg">Try Vyorius</Button>
            <Button className="moreBtn" variant="outline-primary" size="lg">Learn More</Button>
            <p className="orderP">Need to Order.<a href="https://vyorius.com/"><u>Get Started</u></a></p>
        </Jumbotron>
        
    )
}

export default VyoMain;