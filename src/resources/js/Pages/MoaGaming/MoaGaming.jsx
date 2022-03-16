import './MoaGaming.style.css';
import { Row, Col,Form, Container } from 'react-bootstrap';
import {React,Component} from 'react';
import Map from './../../assets/img/map.png';
import WhyChooseMoa from './../../Components/WhyChooseMoa';
import TextWithImg from '../../Components/Cards/TextWithImg';
import Headphone from './../../assets/img/headphone2.png';
import ActionButton from "../../Components/Resources/ActionButton";
import Mail_icon from './../../assets/img/mail-icon.png';
import Location_icon from './../../assets/img/location-icon.png';
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import fbi from './../../assets/img/icons/fbi.png';
import instai from './../../assets/img/icons/instai.png';
import linkedini from './../../assets/img/icons/linkedini.png';
import telei from './../../assets/img/icons/telei.png';
import tubei from './../../assets/img/icons/tubei.png';
import twitteri from './../../assets/img/icons/twitteri.png';   

class GlobalBankingSolution extends Component{  
    resetForm = () => { 
        document.getElementById("contactus-form").reset();
      }
    render(props){
        return(
        <Container fluid>
            <NavBar/>
                 <Row>
                    <section>
                        <div className="container position-relative mt-5"></div>
                            <div className='mt-5'>
                                <TextWithImg bg1="mt-5 moa-gaming" btnTitle="Contact Us" head='Moa Gaming' text='Do you want to start an exceptional betting and gaming business? Maybe improve your existing one? MOA Gaming has got you covered! Contact us now, and our professionals will reach out to you as soon as possible.' img={Headphone}  />
                            </div>
                    </section>
                    <Row className="justify-content-center mx-auto pt-2">
                        <Col md={5}>
                            <div className='form-card p-5'>
                                <h3 className='fw-bold my-3 pb-5'>How Can We Help?</h3>
                                <Form id="contactus-form">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name surname</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Skype,Telegram, Whatsapp ID</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        style={{ height: '100px' }}
                                        />
                                    </Form.Group>
                                    <ActionButton onClick={this.resetForm} text='Send' variant="dark" className={"px-5 mt-5 "} iconClass="bi bi-chevron-right ps-2"/>    
                                </Form>
                            </div>
                        </Col>
                        <Col md={5} className="d-flex align-items-md-end pt-2">
                            <div style={{background:'#06060A'}} className="rounded-card text-light p-6">
                                <h4 className='fw-bold mt-5'>Moa Gaming</h4>
                                <p className='fs-7'>Get in touch with our team for any information about online gaming software, gambling licenses, and all of our products & services.</p>
                                <div className='fs-7'>
                                    <div className='d-flex mt-5'><img src={Mail_icon} className="icon-hw mt-2"/> <p className='ms-3'>sales@moagaming.com</p> </div>
                                    <div className='d-flex mt-2'><img src={Location_icon} className="icon-hw mt-2"/> <p className='ms-3'>Schout bij Nacht Doormanweg 40 <br/>Curaçao, Willemstad</p> </div>
                                </div>
                                <div className="social-links pt-5">
                                    <h6 className='fs-7 fw-bold'>FOLLOW US</h6>
                                    <a href="https://www.facebook.com/moagaming.official/?ref=pages_you_manage" target="_blank">
                                        <img src={fbi} className="px-2"/>
                                    </a>
                                    <a href="https://www.instagram.com/moa.gaming/?hl=en" target="_blank">
                                        <img src={instai} className="px-2"/>
                                    </a>   
                                    <a href="https://www.linkedin.com/company/53481081/admin/" target="_blank">
                                        <img src={linkedini} className="px-2"/>
                                    </a>
                                    <a href="https://t.me/moagamingofficial" target="_blank">
                                        <img src={telei} className="px-2"/>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UClYLsXYDp7083HtJ4srmR0g" target="_blank">
                                        <img src={tubei} className="px-2"/>  
                                    </a>
                                    <a href="https://twitter.com/MOA_Gaming" target="_blank">
                                        <img src={twitteri} className="px-2"/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className='justify-content-center d-flex pt-3'>
                        <Col md={10}>
                            <iframe
                            width="100%"
                            height="600"
                            style={{border:"0"}}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                                &q=Space+Needle,Seattle+WA">
                            </iframe>
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-center mx-auto'>
                        <Col md={10} sm={10}>
                            <WhyChooseMoa className="radius-8"/>
                        </Col>
                    </Row>
                    <Footer/>
                </Row>
            </Container>
            )
        }
}
export default GlobalBankingSolution;