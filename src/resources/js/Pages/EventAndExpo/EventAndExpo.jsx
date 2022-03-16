import './EventAndExpo.style.css';
import { Row, Col,Container } from 'react-bootstrap';
import Event from './../../assets/img/imgevent.png';
import Expo from './../../assets/img/imgexpo.png';
import ActionButton from '../../Components/Resources/ActionButton';
import React, { useState } from 'react';
import NavBar from "./../../Components/NavBar";

const EventAndExpo=()=>{
    const [hoveredLeft, setHoveredLeft] = useState(false);
    const [hoveredRight, setHoveredRight] = useState(false);
    const toggleHoverLeft = () => setHoveredLeft(!hoveredLeft);
    const toggleHoverRight = () => setHoveredRight(!hoveredRight);
    return (
        <Container fluid>
        <NavBar/>
        <Row>
        <div style={{width:'100%'}}>
            <img src={Event} className="img-left" onMouseEnter={toggleHoverLeft} onMouseLeave={toggleHoverLeft} />
            <img src={Expo} className="img-right" onMouseEnter={toggleHoverRight} onMouseLeave={toggleHoverRight} />
            <div  className="text-light">
                <div className="boxOverlay1">
                    <h2 className='fw-bolder'>Upcoming <br/> Event</h2>
                    <h5 className='fw-bold'>Dubai, UAE</h5>
                    <p>21 Mar - 24 Mar 2022</p>
                    <ActionButton
                                    text="Book A Meeting"
                                    variant="transparent"
                                    href="./upcoming-event"
                                    className={"text-light btn-sm"}
                                    iconClass="bi bi-chevron-right ps-2"
                                />
                </div>
                <div className="boxOverlay2">
                    <h2 className='fw-bolder'>Inovation <br/> Expo</h2>
                    <h5 className='fw-bold'>Dubai, UAE</h5>
                    <p>21 Mar - 24 Mar 2022</p>
                    <ActionButton
                                    text="Book A Meeting"
                                    variant="transparent"
                                    href="/inovatio-expo"
                                    className={"text-light btn-sm"}
                                    iconClass="bi bi-chevron-right ps-2"
                                />
                </div>
            </div>
        </div>
        </Row>
        </Container>
        
    )
}
export default EventAndExpo;
