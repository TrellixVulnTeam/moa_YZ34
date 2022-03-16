import "./products.style.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import Editor from "./../../assets/img/Editor.jpg";
import SportsBook from "./../../assets/img/sportsbook.png";
import ESports from "./../../assets/img/e-sports.png";
import VirtualSports from "./../../assets/img/v-s.png";
import LiveStreaming from "./../../assets/img/live-stream.png";
import Statistics from "./../../assets/img/statistics.png";
import Casino from "./../../assets/img/casino.png";
import LiveCasino from "./../../assets/img/live-casino.png";
import P2PGames from "./../../assets/img/p2p-games.png";
import SkillGames from "./../../assets/img/skill-games.png";
import Powerball from "./../../assets/img/powerball.png";
import CrystalCrush from "./../../assets/img/crystal-crush.png";
import Mines from "./../../assets/img/mines.png";
import FiftyWheel from "./../../assets/img/50-wheel.png";
import Blast from "./../../assets/img/blast.png";
import Earth from "./../../assets/img/earth.png";
import Bank from "./../../assets/img/bank.png";
import Cards from "./../../assets/img/cards.png";
import IphoneCards from "./../../assets/img/iphone-cards.png";
import IphoneRing from "./../../assets/img/iphone-ring.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhyChooseMoa from "../../Components/WhyChooseMoa";
import ProductCard from "../../Components/Cards/ProductCard";
import SliderSportsBook from "../../Components/Sliders/SliderSportsBook";
import Header from "../../Components/Headers/Header";
import { Container, Image } from "react-bootstrap";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import ActionButton from "./../../../../resources/js/Components/Resources/ActionButton";

const Product = () => {
    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Header
                    head="iGaming Software Products Conveying Character"
                    text="Launch your complete betting and gaming business with MOA’s sports betting software along with its products that deliver advanced quality and sophisticated features. Our wide range of world-class quality products and personalized approach to your business needs are two of our best strategies that can encourage you to start your iGaming business now!"
                    bgimg="igaming-header.png"
                    height="calc(80vh + 100px)"
                    videoButton="false"
                    hideWatchBtn="true"
                    btnTitle="Contuct Us"
                    mheader="true"
                    href="./contact-us"
                    marginTop="mt-12"
                    textpadding="3rem"
                />

                <section id="sports-batting-software">
                    <div className="container">
                        <div className="section-title">
                            <h2>
                                SPORTS <br />
                                BATTING <br /> SOFTWARE{" "}
                            </h2>
                            <p className="pt-5">
                                To start your auspicious betting business now,
                                MOA Gaming offers you a unique all- <br />{" "}
                                inclusive <b>sports betting software</b> that
                                gives you access to a sportsbook, virtual
                                sports, e- <br />
                                sports, live-streaming, statistics, and much
                                more.
                            </p>
                            <ActionButton
                                text="Contact us"
                                variant="transparent"
                                className="px-5 pt-5 pb-5"
                                iconClass="bi bi-chevron-right ps-2"
                            />
                        </div>
                    </div>
                </section>
                <section id="sportsbook">
                    <div className="container">
                        <div className="section-title ">
                            <h2>Sportsbook </h2>
                            <SliderSportsBook />
                            <Row
                                className="pt-5 p-b-5 d-flex justify-content-center"
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                            >
                                <Col
                                    md="3"
                                    className="rounded p-3 m-2 justify-content-center"
                                    style={{ background: "#1F2332" }}
                                >
                                    <h4 className="liener-gredient-product p-t-card">
                                        70000+
                                    </h4>
                                    <p className="text-light">
                                        Live Match Events
                                    </p>
                                </Col>
                                <Col
                                    md="3"
                                    className="rounded p-3 m-2 justify-content-center"
                                    style={{ background: "#1F2332" }}
                                >
                                    <h4 className="liener-gredient-product p-t-card">
                                        140000+
                                    </h4>
                                    <p className="text-light">
                                        Pre-match Events
                                    </p>
                                </Col>
                                <Col
                                    md="3"
                                    className="rounded p-3 m-2 "
                                    style={{ background: "#1F2332" }}
                                >
                                    <h4 className="liener-gredient-product p-t-card">
                                        120
                                    </h4>
                                    <p className="text-light">Sport Types</p>
                                </Col>
                            </Row>

                            <Row className="pt-2 ">
                                <Col md="4" className="pt-3 p-l-r">
                                    <img
                                        src={SportsBook}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="4" className="pt-3 p-l-r">
                                    <img
                                        src={ESports}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="4" className="pt-3 p-l-r">
                                    <img
                                        src={VirtualSports}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                            <Row className="pb-11">
                                <Col md="7" className="pt-3 p-l-r">
                                    <img
                                        src={LiveStreaming}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="5" className="pt-3 p-l-r">
                                    <img
                                        src={Statistics}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>

                <section id="game-suite">
                    <div className="container">
                        <div className="section-title">
                            <h2>Game Suite </h2>
                            <p>
                                MOA Gaming is delighted to offer a wide range of
                                engaging games, including <br /> our unique
                                Powerball game, skill games, quick games, etc.{" "}
                            </p>
                            <Row className="pt-5">
                                <Col md="7" className="p-l-r">
                                    <img
                                        src={Casino}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="5" className="p-l-r">
                                    <img
                                        src={LiveCasino}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="4" className="p-l-r">
                                    <img
                                        src={P2PGames}
                                        className="mx-100 pt-3"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="5" className="p-l-r">
                                    <img
                                        src={SkillGames}
                                        className="mx-100 pt-3"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="3" className="p-l-r">
                                    <img
                                        src={Powerball}
                                        className="mx-100 pt-3"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>

                <section
                    id="game-suite"
                    className="pb-5 p-b-13 pt-3 q-game"
                    style={{ backgroundColor: "#F5F5F7" }}
                >
                    <div className="container">
                        <div className="section-title">
                            <h2 className="pt-7">Quick Games </h2>
                            <p>
                                Your players will never get bored with MOA’s
                                exclusive quick games including Blast, Crystal
                                Crush,Mines, <br /> X50 Wheel, etc.
                            </p>
                            <Row className="pt-3">
                                <Col md="3" className="pt-3 p-l-r">
                                    <img
                                        src={CrystalCrush}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="3" className="pt-3 p-l-r">
                                    <img
                                        src={Mines}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="3" className="pt-3 p-l-r">
                                    <img
                                        src={FiftyWheel}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="3" className="pt-3 p-l-r">
                                    <img
                                        src={Blast}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>

                <section id="agent-affilate-platform">
                    <div className="container">
                        <div className="section-title">
                            <h2>Agent Affilate Platform </h2>
                            <p>
                                MOA Gaming is delighted to offer a wide range of
                                engaging games, including our unique Powerball
                                game, <br /> skill games, quick games, etc.{" "}
                            </p>

                            <Row className="p-5">
                                <Col md={{ span: 4, offset: 2 }}>
                                    <h6 className="fw-bold">
                                        Affiliate Software
                                    </h6>
                                </Col>
                                <Col md="4">
                                    <h6
                                        style={{
                                            color: "rgba(255, 255, 255, 1)",
                                        }}
                                    >
                                        Agent Management System
                                    </h6>
                                </Col>
                                <Col md="2"></Col>

                                <Col
                                    md={{ span: 4, offset: 2 }}
                                    className="pt-4"
                                >
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(0, 194, 255, 1)",
                                            }}
                                        >
                                            Monitoring
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4 pt-4">
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(0, 194, 255, 1)",
                                            }}
                                        >
                                            Access
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>

                                <Col
                                    md={{ span: 4, offset: 2 }}
                                    className="pt-4"
                                >
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(143, 0, 255, 1)",
                                            }}
                                        >
                                            Development
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4 pt-4">
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(143, 0, 255, 1)",
                                            }}
                                        >
                                            Opportunity
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>

                                <Col
                                    md={{ span: 4, offset: 2 }}
                                    className="pt-4"
                                >
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(255, 0, 229, 1)",
                                            }}
                                        >
                                            Marketing
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4 pt-4">
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(255, 0, 229, 1)",
                                            }}
                                        >
                                            Reward
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>

                                <Col
                                    md={{ span: 4, offset: 2 }}
                                    className="pt-4"
                                >
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(255, 61, 0, 1)",
                                            }}
                                        >
                                            Platform
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4 pt-4">
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(255, 61, 0, 1)",
                                            }}
                                        >
                                            Complete
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>

                                <Col
                                    md={{ span: 4, offset: 2 }}
                                    className="pt-4"
                                >
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(255, 153, 0, 1)",
                                            }}
                                        >
                                            Launch
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4 pt-4">
                                    <div className="card py-3 px-4">
                                        <h3
                                            style={{
                                                color: "rgba(255, 153, 0, 1)",
                                            }}
                                        >
                                            Complete
                                        </h3>
                                        <p>
                                            Monitor and calculate your revenues
                                            easiers than ever.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </div>
                    </div>

                    <div className="container position-relative">
                        <div className="section-title bg-dark border-radius">
                            <h1 className="text-light pt-5 fw-bold">
                                Payment Solutions
                            </h1>
                            <p className="p-5 mx-md-5">
                                MOA Gaming presents you with unique online
                                payment solutions and ensures the absolute trust
                                of your players. With our payment gateway,
                                you’ll have access to different payment methods
                                in one solution across different regions of the
                                world.
                            </p>
                            <Row className="pt-5 px-5 mx-0 pb-5">
                                <ProductCard
                                    img={Bank}
                                    head="Bank Transfer"
                                    footline="MOA Gaming allows you to receive payments via Visa, MasterCard, and bank transfers."
                                />
                                <ProductCard
                                    img={IphoneCards}
                                    head="Innovative MOA Gaming E-Wallet"
                                    footline="For those operators who strive to keep their players’ data safe, MOA Gaming presents an innovative and convenient E-Wallet for buying, selling, and exchanging popular e-money and cryptocurrencies globally."
                                />
                                <ProductCard
                                    img={Cards}
                                    head="Integrated Payment method"
                                    footline="Receive and make payments with your preferred payment method from any country around the world whenever you need to."
                                />
                            </Row>
                        </div>

                        <Row className="mt-4 px-5 mx-0 pb-5 bg-dark border-radius mb-5">
                            <Col md={6}>
                                <Image
                                    src={IphoneRing}
                                    className="notification-app-section-img"
                                    alt="logo"
                                />
                            </Col>
                            <Col
                                md={6}
                                className="p-5 align-items-center justify-content-center d-flex flex-column"
                            >
                                <h3 className="text-light w-100">
                                    Notification
                                    <br />
                                    App
                                </h3>
                                <p className="fs-7 m-10 text-md-start text-light">
                                    For those operators who strive to keep their
                                    players’ data safe, MOA Gaming presents an
                                    innovative and convenient E-Wallet for
                                    buying, selling, and exchanging popular
                                    e-money and cryptocurrencies globally.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section>
                    <Container>
                        <div
                            style={{ paddingTop: "3rem" }}
                            className="section-title"
                        >
                            <WhyChooseMoa
                                bgimg="choose-moa.png"
                                className="border-radius"
                                justify="left"
                            />
                        </div>
                    </Container>
                </section>
                <Footer />
            </Row>
        </Container>
    );
};
export default Product;
