import "./SportsBettingSoftware.style.css";
import { Row, Container } from "react-bootstrap";
import Header from "./../../Components/Headers/Header";

import Player2 from "./../../assets/img/player2.png";
import Remote from "./../../assets/img/Remote.png";
import Balls from "./../../assets/img/balls.png";
import Live from "./../../assets/img/live.png";
import Stats from "./../../assets/img/stats.png";
import Col from "react-bootstrap/Col";
import ScoreCard from "../../Components/Cards/ScoreCard";
import Features from "../../Components/AffilateAgentPlatforms/Features";
import SliderSportsBook from "../../Components/Sliders/SliderSportsBook";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import { Component } from "react";
import ModalVideo from "react-modal-video";
// import "../../../../node_modules/react-modal-video/scss/modal-video.scss";

class SportsBettingSoftware extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            videoId: null,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal(videoId) {
        this.setState({ videoId: videoId });
        this.setState({ isOpen: true });
    }
    render(props) {
    return (
        <Container fluid>
            <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId={this.state.videoId}
                    onClose={() => this.setState({ isOpen: false })}
                />
            <NavBar />
            <Row>
                <Header
                    head="SPORTS"
                    head1="BETTING"
                    head2="SOFTWARE"
                    h2Class="h2-md-head"
                    textwidth="79"
                    heading="top"
                    text="Phenomenal all-in-one sports betting software — granting you access to a supreme sportsbook, virtual sports, e-sports, live-streaming, statistics, and more to kick off your business. As one of the best sports software, we offer up to 70K live matches, 140K pre-match events, and 120+ sports types every month exclusively for your players."
                    btnLessPedding="true"
                    bgimg="mohammad-rahmani.png"
                    mheader="true"
                    href="./contact-us"
                    height="90vh"
                    btnTitle="Contact Us"
                    videoId="VcWarr-1oow"
                    buttonBG = "#000000"
                />
                <section id="sports-book" style={{background: `linear-gradient(180deg, rgba(245, 245, 247, 0) 0%, #F5F5F7 27.99%, #F5F5F7 100%)`}}>
                    <Row className="justify-content-center">
                        <Col md="9">
                        <div className="section-title pt-5 mt-5">
                            <h2>Sportsbook </h2>
                            <p className="d-inline-block mt-5 f18" style={{width:'77%'}}>
                                MOA Gaming offers the best sports betting
                                software, now available on mobile, web, and
                                native apps for iOS and Android. The sportsbook
                                software guarantees maximum flexibility and
                                adaptability, as well as exceptional player
                                experience. Players have the ultimate
                                opportunity to customize their view on the
                                platform by choosing Classic, Modern, Asian,
                                Combo, African or European. <br />
                                <br />
                                Uncover the benefits of the advanced betting
                                tools on our sportsbook software such as Edit
                                Bet, BetCloud, SuperBet, Counter-offer,
                                BetBuilder, for your players. Our sports betting
                                software suggests additional features in
                                specific cases, such as Tax Engine, Trading
                                Engine, Live Match Tracker, and Expert
                                Predictions. The Sportsbook is available to you
                                in 3 solutions: White label Sportsbook, Turnkey,
                                and API.
                            </p>
                            <SliderSportsBook />
                            <ScoreCard />
                            </div>
                        </Col>
                    </Row>
                </section>
                <section id="sportsbook" className="pt-5">
                        <div className="pt-5 mt-5" style={{paddingLeft:'8rem',paddingRight:'8rem'}}>
                            <Row className="mt-5 justify-content-center">
                                <Col md="4 mt-4">
                                    <div className="p-4 bdr card-three-bg"  style={{ backgroundColor: "#8F6FEC" }} >
                                        <div className="d-flex">
                                            <img
                                                src={Remote}
                                                className="mx-20"
                                                alt="logo"
                                            />
                                            <h3 className="text-light fw-bold fs-2 p-1 ms-3">
                                                E-Sports{" "}
                                            </h3>
                                        </div>
                                        <p className="text-light text-justify fs-7 lh-base pt-3 f16">
                                            Our E-Sports product is particularly
                                            devised with HD quality streaming,
                                            including up to 12,000+ unique live
                                            events monthly, 5,000+ distinctive
                                            pre-match events, and up to 12+
                                            major championships. The players
                                            have an exclusive opportunity to
                                            place wagers on 500+ tournaments
                                            over the course of the year,
                                            including most of the major
                                            championships such as LoL,
                                            Overwatch, CS: GO, DOTA2, KoG,
                                            Starcraft, Starcraft2, and Rainbow
                                            Six. On average, MOA Gaming’s
                                            E-Sports provides 14,000+ games —
                                            each streamed in over 50+ markets.
                                            <br /> <br />
                                            On E-sports, we also offer eFootball
                                            (using FIFA 2020 from EA),
                                            eBasketball videos (using NB2K20
                                            from 2K), eTennis (using Tennis
                                            World Tour), and Mortal Combat.
                                        </p>
                                    </div>
                                </Col>

                                <Col md="4 mt-4">
                                    <div
                                        className="p-4 bdr card-three-bg"
                                        style={{ backgroundColor: "#54BBC1" }}
                                    >
                                        <div className="d-flex">
                                            <img
                                                src={Balls}
                                                className="mx-17"
                                                alt="logo"
                                            />
                                            <h3 className="text-light fw-bold fs-2 p-1 ms-3">
                                                Virtual Sports
                                            </h3>
                                        </div>
                                        <p className="text-light text-justify fs-7 lh-base pt-3 f16" style={{marginTop:'25%'}}>
                                            With MOA Gaming’s E-Sports, you can
                                            enable your users to experience
                                            betting during the most popular
                                            E-Sports events worldwide. Give them
                                            the chance to engage in major global
                                            championships and tournaments during
                                            the year.
                                        </p>
                                    </div>
                                </Col>

                                <Col md="4 mt-4">
                                    <div
                                        className="p-4 bdr card-three-bg"
                                        style={{ backgroundColor: "#4F8DDE" }}
                                    >
                                        <div className="d-flex">
                                            <img
                                                src={Live}
                                                className="mx-17"
                                                alt="logo"
                                            />
                                            <h3 className="text-light fw-bold fs-2 p-1 ms-3">
                                                Live Streaming{" "}
                                            </h3>
                                        </div>
                                        <p className="text-light text-justify fs-7 lh-base pt-3 f16">
                                            Our E-Sports product is particularly
                                            devised with HD quality streaming,
                                            including up to 12,000+ unique live
                                            events monthly, 5,000+ distinctive
                                            pre-match events, and up to 12+
                                            major championships. The players

                                            have an exclusive opportunity to
                                            place wagers on 500+ tournaments
                                            over the course of the year,
                                            including most of the major
                                            championships such as LoL,
                                            Overwatch, CS: GO, DOTA2, KoG,
                                            Starcraft, Starcraft2, and Rainbow
                                            Six. On average, MOA Gaming’s
                                            E-Sports provides 14,000+ games —
                                            each streamed in over 50+ markets.
                                            <br /> <br />
                                            On E-sports, we also offer eFootball
                                            (using FIFA 2020 from EA),
                                            eBasketball videos (using NB2K20
                                            from 2K).
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col md="12 mt-4 mb-5">
                                    <div
                                        className="p-4 bdr"
                                        style={{ backgroundColor: "#DCDCE8" }}
                                    >
                                        <Row>
                                            <Col md="9">
                                                <div className="d-flex">
                                                    <img
                                                        src={Stats}
                                                        className="max-5"
                                                        alt="logo"
                                                    />
                                                    <h3 className="fw-bold fs-2 p-1 ms-3">
                                                        Statistics{" "}
                                                    </h3>
                                                </div>
                                                <p className="text-justify  lh-base pt-3 f16 lh-lg">
                                                The statistics reveal over 25 years of accurate historical data, as well as data from matches held in over 130 regions and exquisite data from over 2600 competitions, including 700+ soccer tournaments. Discover new perspectives and get revolutionized by our supreme coverage of 19 sports.  <br/><br/>
                                                Statistics also reveal a lot on two competing teams, comprehensive match statistics, such as the number of goals, assists, penalties, substitutions, shots on/off target, yellow cards/reds, corners, fouls, and offside. All the important statistics of the most popular football championships are available on our platform with authentic visuals, user-friendly interface, and advanced features. Furthermore, Statistics enables easy navigation for the most demanding user. 
                                                </p>
                                            </Col>
                                            <Col
                                                md={3}
                                                className="d-flex flex-column justify-content-center"
                                                onClick={()=>this.openModal('FT6sMiUx5Nk')}
                                                style={{ cursor:'pointer' }}
                                            >
                                                <img
                                                    src={Player2}
                                                    className="ps-5"
                                                    alt="logo"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                </section>
                <div className="pt-5 mt-5"></div>
                <div className="pt-5 mt-5"></div>
                <Features
                    head1="Multi-Chanel"
                    head1_1="Solutions"
                    caption1="Solutions are available on mobile, Android and iOS, desktop, and retail."
                    head2="Enhanced "
                    head2_1="Tools"
                    caption2="With MOA Gaming, you can have the most advanced reporting and monitoring tools for the more stable operation of your business. "
                    head3="Wide Range "
                    head3_1="of Games"
                    caption3="LMOA Gaming offers 5000+ games for your players to guarantee a diverse iGaming experience. "
                    head4="A Bonus "
                    head4_1="System"
                    caption4="An extensive bonus system with access to the management of your bonuses and free spins in the back office."
                    head5="Flexible "
                    head5_1="Platform"
                    caption5="We provide a multi-language and multi-currency platform for the worldwide operation of your betting and gaming business."
                    head6="Comprehensive "
                    head6_1="Risk Management"
                    caption6="With the management of risks done well, your business has the best chance of reaching its goals."
                />
                <Footer />
            </Row>
            
        </Container>
    );
    }
};
export default SportsBettingSoftware;
