import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../../Components/Headers/Header";
import bg from "./../../assets/img/aboutus-bg.png";
import "./about-us.style.css";
import Explore from "./../../assets/img/explore.png";
import Improve from "./../../assets/img/improve.png";
import Grow from "./../../assets/img/grow.png";
import ActionButton from "../../Components/Resources/ActionButton";
import ProductCard from "../../Components/Cards/ProductCard";
import OurVision from "./../../assets/img/ourvision.png";
import { hide } from "@popperjs/core";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

export default function AboutUs() {
    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Header
                    head="Where iGaming Magic Happens"
                    text="MOA Gaming is your number one trusted partner in the Gaming and Betting industry. With a long history of successful business collaborations, MOA gaming is determined to continue delivering high-quality services and products to all gaming operators. "
                    btnTitle="Contact us"
                    hideWatchBtn="true"
                    bgimg="aboutus-bg.png"
                    mheader="true"
                    href="./contact-us"
                />
                <section style={{ marginTop: "15vh" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2>Who We Are </h2>
                            <p className="grey" style={{ color: "#6D6D6D" }}>
                                It all started 18 years ago when a group of
                                technology geeks came up with the idea of MOA
                                gaming. With our main development office based in
                                Armenia, our international company has managed to
                                come a long way.
                            </p>
                            <p className="grey" style={{ color: "#6D6D6D" }}>
                                Our passion for innovation and the immense interest
                                in a safe gaming experience have always been the two
                                main driving forces of our company.
                            </p>
                            <p className="grey" style={{ color: "#6D6D6D" }}>
                                Today MOA gaming is one of the leading voices in the
                                online gaming industry, offering services to
                                operators from all over the world. Our products
                                include{" "}
                                <b>
                                    {" "}
                                    Sports Betting, Gaming Suite, Affiliate and
                                    Agent Platform, Payment Solution, Notification
                                    App,
                                </b>
                                and a list of services, including{" "}
                                <b>
                                    {" "}
                                    Online Gaming License, Customer Support,
                                    Marketing Service, Design Service, Risk
                                    Management, Sports Sponsorship.
                                </b>
                            </p>
                        </div>
                    </div>
                    <Row className="pt-5" style={{ paddingRight: "1rem" }}>
                        <Col md="3"></Col>
                        <Col
                            md="3"
                            className="rounded p-3 m-2 text-c"
                            style={{ background: "#1F2332" }}
                        >
                            <h4
                                className="liener-gredient"
                                style={{ fontSize: "6vmin" }}
                            >
                                15+
                            </h4>
                            <p className="text-light">
                                Customizable Services and Solutions
                            </p>
                        </Col>
                        <Col
                            md="3"
                            className="rounded p-3 m-2 text-c "
                            style={{ background: "#1F2332" }}
                        >
                            <h4 className="liener-gredient">30+</h4>
                            <p className="text-light">Trusted Partners</p>
                        </Col>
                    </Row>
                </section>
                <section style={{ minHeight: "100vh", marginTop: "18vmin" }}>
                    <div className="section-title">
                        <h2>Our Mission</h2>
                        <p>
                            MOA Gaming presents a range of world-class solutions to
                            launch your online iGaming business.
                        </p>
                        <div className="container">
                            <Row className="p-md-5 p-sm-2">
                                <ProductCard
                                    img={Explore}
                                    bgcolor="rgba(31, 35, 50, 1)"
                                    border="10px solid #fff"
                                    head="Explore"
                                    footline="At MOA Gaming, we are dedicated to providing innovative and customizable products, services, and solutions to all our clients."
                                />
                                <ProductCard
                                    img={Improve}
                                    bgcolor="rgba(31, 35, 50, 1)"
                                    border="10px solid #fff"
                                    head="Improve"
                                    footline="MOA Gaming is at the forefront of the fast development in the betting and gaming world, so all our solutions and software can be adapted and customized to your business and target market."
                                />
                                <ProductCard
                                    img={Grow}
                                    bgcolor="rgba(31, 35, 50, 1)"
                                    border="10px solid #fff"
                                    head="Grow"
                                    footline="Receive and make payments with the payment method of your preference from any country around the world whenever you need to."
                                />
                            </Row>
                        </div>
                    </div>
                </section>
                <div
                    className="last d-flex"
                    style={{ marginTop: "15vh", marginBottom: "15vh" }}
                >
                    <div
                        className="d-flex d-column justify-content-center mx-auto mt-auto mb-auto"
                        style={{ opacity: "1" }}
                    >
                        <Row>
                            <h2 className="text-light text-center f-bold">
                                Our Vision
                            </h2>
                            <p className="text-light text-center">
                                iGaming industry Together With You, We Can Make a
                                Difference in the.
                            </p>
                            <ActionButton
                                text="Contact us"
                                variant="none"
                                textcolor="#fff"
                                href="#"
                                className="px-5"
                                iconClass="bi bi-chevron-right ps-2"
                            />
                        </Row>
                    </div>
                </div>
                <Footer/>
            </Row>
        </Container>
    );
}
