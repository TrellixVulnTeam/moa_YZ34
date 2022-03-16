import './AllEventAndExpo.style.css';
import { Row, Col,Container } from 'react-bootstrap';
import OneI from './../../assets/img/1-upcoming.png';
import TwoI from './../../assets/img/2-inovation.png';
import ThreeI from './../../assets/img/3-sports.png';
import FourI from './../../assets/img/4-inovation-expo.png';
import FiveI from './../../assets/img/5-upcoming-event.png';
import ActionButton from '../../Components/Resources/ActionButton';
import NavBar from "./../../Components/NavBar";

const AllEventAndExpo=()=>{
    return (
    <Container fluid>
        <NavBar/>
        <Row>
            <div style={{width:'100%'}} className="all-event-expo">
                <img src={OneI} className="img1" style={{width:'24%',left:'0'}} />
                <img src={TwoI} className="img2" style={{width:'25%',left:'19%'}} />          
                <img src={ThreeI} className="img3" style={{width:'24%',left:'39.5%'}} />          
                <img src={FourI} className="img4" style={{width:'24%',left:'59%'}} />          
                <img src={FiveI} className="img5" style={{width:'22%',left:'78%'}} />          
                <div  className="text-light">
                    <div class="boxOverlay" style={{ left:'2%' }}>
                        <h2 className='fw-bolder'>Upcoming <br/> Events</h2>
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
                    <div class="boxOverlay" style={{ left:'22%' }}>
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
                    <div class="boxOverlay" style={{ left:'42%' }}>
                        <h2 className='fw-bolder'>Sport <br/> Events</h2>
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
                    <div class="boxOverlay" style={{ right:'23%' }}>
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
                    <div class="boxOverlay" style={{ right:'4%' }}>
                        <h2 className='fw-bolder'>Upcoming <br/> Events</h2>
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
                </div>
            </div>
        </Row>
    </Container>
    )
}
export default AllEventAndExpo;
