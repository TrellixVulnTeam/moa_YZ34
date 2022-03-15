import "./GamingServices.style.css";
import { Row, Col, Container } from "react-bootstrap";
import CasinoLicence from "./casino-licence.png";
import Headphone from "./headphones.png";
import Dart from "./dart.png";
import Mac from "./mac.png";
import Risk from "./risk.png";
import Trophy from "./trophy.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import right from './assets/right.svg';

export default function GamingServices() {
    return (
        <>
            <NavBar />
            <div className='gs-header-wrapper'>
                <h1>MOA Gaming Services:</h1>
                <h6>We Strive to Empower</h6>
                <p>
                    Start your influential betting and gaming business with MOA’s advanced services that will turn the process into a delightful experience.
                </p>
                <button className='casino-header-contact-btn'>
                    <a href='/contact-us'>
                        <span>Contact Us</span>
                        <img src={right} />
                    </a>
                </button>
            </div>
            <div className='gs-section-wrapper gs-section-white'>
                <div className='gs-section-text'>
                    <h2>
                        Online Gaming License
                    </h2>
                    <h6>
                        Your Safety Guarantee
                    </h6>
                    <p>
                        Getting a license is vital when launching an online betting and gaming business. It’s the warranty to your players, which confirms your website conducts its various activities legally. MOA offers two of the most popular gaming licenses in the industry: Curacao and Malta.
                    </p>
                    <button className='casino-header-contact-btn'>
                        <a href='/onilne-gaming'>
                            <span>Read More</span>
                            <img src={right} />
                        </a>
                    </button>
                </div>
                <div className='gs-section-img'>
                    <img src={CasinoLicence} />
                </div>

            </div>



            <div className='gs-section-wrapper gs-section-grey'>
                <div className='gs-section-img'>
                    <img src={Headphone} />
                </div>       <div className='gs-section-text'>
                    <h2>
                        24/7 Customer Support
                    </h2>
                    <h6>
                        Time-Efficiency and Consistency in One Service
                    </h6>
                    <p>
                        MOA Gaming offers your players a 24/7 world-class customer support service with a kind of assistance that’ll never let you down. Our specialists make sure that your players are well-informed, updated and are getting all the advice they need.
                    </p>
                    <button className='casino-header-contact-btn'>
                        <a href='/247-customer-support'>
                            <span>Read More</span>
                            <img src={right} />
                        </a>
                    </button>
                </div>
            </div>


            <div className='gs-section-wrapper gs-section-white'>
                <div className='gs-section-text'>
                    <h2>
                        Marketing Services
                    </h2>
                    <h6>
                        Your Safety Guarantee
                    </h6>
                    <p>
                        We provide marketing services that are efficiently planned and thought through ahead of time. In an industry like gaming and betting, it’s essential to start your marketing and monetization with the right tactics and strategies to achieve long-term success.   </p>
                    <button className='casino-header-contact-btn'>
                        <a href='/marketing-services'>
                            <span>Read More</span>
                            <img src={right} />
                        </a>
                    </button>
                </div>
                <div className='gs-section-img'>
                    <img src={Dart} />
                </div>

            </div>

            <div className='gs-section-wrapper gs-section-grey'>
                <div className='gs-section-img'>
                    <img src={Mac} />
                </div>       <div className='gs-section-text'>
                    <h2>
                        Design Services
                    </h2>
                    <h6>
                        Visuals That Deliver Professionalism
                    </h6>
                    <p>
                        MOA Gaming offers your players a 24/7 world-class customer support service with a kind of assistance that’ll never let you down. Our specialists make sure that your players are well-informed, updated and are getting all the advice they need.   </p>
                    <button className='casino-header-contact-btn'>
                        <a href='/design-services'>
                            <span>Read More</span>
                            <img src={right} />
                        </a>
                    </button>
                </div>
            </div>

            <div className='gs-section-wrapper gs-section-white'>
                <div className='gs-section-text'>
                    <h2>
                        Risk Management Services
                    </h2>
                    <h6>
                        Your Protection in our Hands
                    </h6>
                    <p>
                        MOA Gaming’s professional risk management system is designed to carefully calculate all the odds and markets, and safeguard your margin. We offer only professionalism in sports betting fraud management and financial loss prevention at every stage of your players’ journey.   </p>
                    <button className='casino-header-contact-btn'>
                        <a href='/casino-and-betting'>
                            <span>Read More</span>
                            <img src={right} />
                        </a>
                    </button>
                </div>
                <div className='gs-section-img'>
                    <img src={Risk} />
                </div>

            </div>








            <Row>
                <div
                    head="Risk Management Services "
                    subhead="Your Protection in our Hands"
                    text="MOA Gaming’s professional risk management system is designed to carefully calculate all the odds and markets, and safeguard your margin. We offer only professionalism in sports betting fraud management and financial loss prevention at every stage of your players’ journey."
                    img={Risk}
                    btnTitle="Read More"
                    link=""
                />
                <Row className="justify-content-center bg-grey m-0">
                    <Col
                        md={10}
                        className="bg-grey"
                        style={{
                            background: `url(${Trophy}) top center`,
                            backgroundSize: "80%",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Row
                            className="justify-content-center"
                            style={{ marginTop: "25%" }}
                        >
                            <Col md={4}>
                                <h2 className="fw-bold ms-sm-5">
                                    Sports <br /> Sponsorship
                                </h2>
                            </Col>
                            <Col md={2}></Col>
                            <Col md={4}>
                                <div className="ms-sm-5">
                                    <h4 className="fs-6 fw-bold">
                                        Your Brand Name Going Viral
                                    </h4>
                                    <p>
                                        Get access to the most famous sports brands
                                        and let your brand name appear on the
                                        world’s most renowned platforms. With MOA
                                        Gaming,
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <div className="text-center mb-5">
                            <button text="Read More" variant="dark" href="./gaming-sports" className="px-5 mt-5" iconClass="bi bi-chevron-right ps-2" />
                        </div>
                    </Col>
                </Row>
                <section>
                    <Container>
                        <div className="section-title">
                            <div className="border-radius" justify="center" />
                        </div>
                    </Container>
                </section>
                <Footer />
            </Row>
        </>
    );
}
