import "./landing.style.css";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.js";
import Blog from "./../../Components/Blog";
import { Row, Container } from 'react-bootstrap';
import WhyChooseMoa from "./../../Components/WhyChooseMoa";
import SliderPartners from "./../../Components/Sliders/SliderPartners";
import OurSolutions from '../../Components/Resources/OurSolutions';
import ActionButton from "../../Components/Resources/ActionButton";
import ButtonEffect from "../../Components/Resources/ButtonEffect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Landing() {
    useEffect(() => {
        Aos.init({
            disable: "mobile",
            duration: 1600,
        });
    }, []);
    return (
        <Container fluid>
            <NavBar/>
            <Row>
            <section className="main-section">
                <section
                    id="home-page-section"
                    className="d-flex align-items-end justify-content-center "
                >
                    <div className="container position-relative">
                    <div id="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="290px" height="290px" viewBox="0 0 400 400" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                        <defs>
                            <path id="circlePath" d=" M 200, 200 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                        </defs>
                        <g transform="scale(1.2)">
                            <use xlinkHref="#circlePath" fill="none"/>
                            <image width="15%" x="170px" y="165px" id="logo" href="data:image/png;base64,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"/>
                            <text fill="#ffffff">
                            <textPath xlinkHref="#circlePath">MOA Hold and feel the MOA Hold and feel the </textPath>
                            </text>
                        </g>
                        </svg>
                        </div>
                        <h2 className="pb-1 mb-1 claim-your-power">Claim Your Power With Our</h2>
                        <h1 className="pb-5 mb-5 gaming-soft">iGaming Software.</h1>
                        <div className="position-relative">
                            <ButtonEffect href="/products" text="Products" />
                                <ActionButton
                                text="Contact us"
                                variant="transparent"
                                href="/contact-us"
                                className={"px-5 text-light slideRightAnimate"}
                                iconClass="bi bi-chevron-right ps-2"
                            />
                        </div>
                    </div>
                </section>
                </section>

                <section id="who-we-are">
                    <div className="container ">
                        <div className="section-title mt-5 justify-content-center mt-5">
                            <div className="mt-5 pt-5"></div>
                            <h2>Who We Are </h2>
                            <p className="fs-5 d-inline-block who-text">
                                Meet MOA Gaming's all-inclusive and accessible
                                Gaming platform, where you can grow or start up
                                your business in a short time frame.
                                Uncomplicated and manageable, our Gaming
                                software solution is designed to help operators
                                launch their limitless betting and gaming
                                business.
                            </p>
                            <p className="fs-5 d-inline-block who-text">
                                At MOA Gaming, we know how to meet the needs of
                                every business, big or small, and we tailor
                                solutions to your specific business goals and
                                target markets. We'll help you build a solid
                                virtual presence with excellent performance and
                                player satisfaction. MO Gaming values your trust
                                and aims to satisfy your Gaming demands every
                                step of the way, 24/7.
                            </p>
                            <p className="fs-5 d-inline-block who-text">
                                With MOA Gaming's Gaming software, high-quality
                                service, flexible products, and strong security,
                                you'll have everything you need to start an
                                impressive Gaming business, room to grow and
                                develop, and every opportunity to be successful
                                in the field.
                            </p>
                        </div>
                    </div>
                </section>
            
                <section id="who-we-are">
                    <div className=" ps-0 pb-5 mb-3">
                        <div className="section-title">
                            <h2>CHOOSE ABILITIES </h2>
                            <h2 className="opacity6">CUSTOMIZE YOUR BRAND </h2>
                            <h2 className="opacity3">MAKE A REVOLUTION </h2>
                        </div>
                    </div>
                </section>

                <section
                    id="our-products"
                    className="bg-grey"
                    style={{ minheight: "100vh" }}
                >
                    <div className="container mobile-width mt-2">
                        <div className="section-title m-text mt-5 pt-2 lh-0">
                            <h2 style={{width: "100vw !important"}}>
                                Our Products{" "}
                            </h2>
                            <p className="text-transformation-none pb-5  f18">
                                Your practical guide to{" "}
                                <strong>world-class quality</strong> iGaming software
                                products.
                            </p>
                            <div
                                className="row product-box mt-5"
                                style={{ marginBottom: "8px" }}
                            >
                                <div
                                    className="col-md-4 m-p"
                                    style={{ paddingRight: "0" }}
                                >
                                    <div
                                        className="ps-3 pb-4 d-flex align-items-end m-box-h col11"
                                        style={{
                                            backgroundColor: "#6F7AA5",
                                            height: "500px",
                                            left: "140px",
                                        }}
                                    >
                                        <h1 className="text-light-custom ps-3 col1" style={{fontSize:'4rem'}}>
                                        Sport<br/>Betting
                                        </h1>
                                    </div>
                                </div>

                                <div
                                    className="col-md-4 m-p"
                                    style={{ paddingRight: "0" }}
                                >
                                    <div
                                        className="ps-2 pb-2 m-box-h d-flex align-items-end col22"
                                        style={{
                                            backgroundColor: "#D5D9E8",
                                            height: "270px",
                                        }}
                                    >
                                        <h1 className="text-light-custom col2 ps-3" style={{fontSize:'3.3rem'}}>
                                            Gaming
                                            <br />Suite
                                        </h1>
                                    </div>
                                    <div
                                        className="ps-2 pb-4 mt-2 m-box-h d-flex align-items-end "
                                        style={{
                                            backgroundColor: "#E5CFBE",
                                            height: "222px",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        <h1 className="text-light-custom col3 ps-3" style={{fontSize:'3.3rem'}}>
                                        Affiliate<br/>Platform
                                        </h1>
                                    </div>
                                </div>
                                <div
                                    className="col-md-4 m-p"
                                    style={{ paddingRight: "0" }}
                                >
                                    <div
                                        className="ps-2 pb-2 m-box-h d-flex align-items-end"
                                        style={{
                                            backgroundColor: "#CDE8CD",
                                            height: "215px",
                                        }}
                                    >
                                        <h1 className="text-light-custom col4 ps-3" style={{fontSize:'3.3rem'}}>
                                        Payment<br />Solution
                                        </h1>
                                    </div>
                                    <div
                                        className="ps-2 pb-4 mt-2 m-box-h d-flex align-items-end"
                                        style={{
                                            backgroundColor: "#E0CBE0",
                                            maxWidth: "100%",
                                            height: "278px",
                                        }}
                                    >
                                        <h1 className="text-light-custom col5 ps-3" style={{fontSize:'3.3rem'}}>
                                            Notification<br/>App
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="out-solutions" className="pb-5 mb-5">
                    <div className="container">
                        <div className="section-title justify-content-center mt-5 pb-5">
                            <h2>Our Solutions </h2>
                            <p className="d-inline-block" style={{color:'#06060A'}}>
                                MOA Gaming presents a range of world-class
                                solutions to launch your online iGaming
                                business. Reach out to us and receive MOA
                                Gaming’s reliable betting and gaming solutions
                                tailored to your business objectives.
                            </p>
                            <div className="mt-5 pt-5"></div>
                            <OurSolutions/>
                        </div>
                    </div>
                </section>

                <section
                    id=""
                    style={{ backgroundColor: "#F5F5F7" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pt-5" style={{borderRight:'3px solid white'}}>
                                <h2 className="moa-gaming mt-5 pt-5">Moa <br/>Gaming <br /> <span className="m-services">Services</span> </h2>
                                <p className="mt-5 font-size-18" style={{color:'#06060A',wordSpacing:'8px',opacity:'0.6'}}>
                                    iGaming software solutions that deliver
                                    sophisticated quality. We create fail-proof
                                    online iGaming experiences and provide you
                                    with solutions that inspire trust in your
                                    players. Get in the game with MOA Gaming’s
                                    online casino and betting software and
                                    contact us for more information about our
                                    services.
                                </p>
                            </div>
                            <div className="col-md-8 ps-5 mt-3 mb-5 pt-5">
                                <div className="ps-3 ms-5">
                                    <h2 className="fw-bold mt-5">Online Gaming License </h2>
                                    <h1 className="liener-gredient mt-3 ">
                                        Customer <br/> Support Service{" "}
                                    </h1>
                                    <div className="services-li mt-4 pt-5">
                                    <h3 className="text-light fw-bold">Marketing Services</h3>
                                    <h3 className="text-light fw-bold">Design Services</h3>
                                    <h3 className="text-light fw-bold">Risk Management</h3>
                                    <h3 className="text-light fw-bold">Sports Sponsorship Advertisement</h3>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="our-partners" className="pt-5">
                    <div className="">
                        <div className="section-title pt-5">
                            <h2>Our Partners </h2>
                            <p>Best providers of the entire industry.</p>
                            <SliderPartners />
                            <SliderPartners />
                        </div>
                    </div>
                </section>
                <Blog />
                <section>
                    <Container>
                        <div className="section-title pb-5 mb-5 pt-5">
                            <WhyChooseMoa className="border-radius-25" justify="center" bgcolor="#1F2332"/>
                        </div>
                    </Container>
                </section>
            <Footer/>
        </Row>
    </Container>
    );
}
