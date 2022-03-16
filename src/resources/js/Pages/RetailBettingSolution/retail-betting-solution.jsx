import { React, Component } from "react";
import { Col, Image, Row, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import TextImageSection from "../../Components/TextImageSection";
import "./retail-betting-solution.style.css";
import cashier from "../../assets/img/cashier.png";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

class RetailBettingSolution extends Component {
    render() {
        return (
        <Container fluid>
         <NavBar
         logo="moa-logo-black.svg"
         textClass="text-dark"
         bg="rgba(255, 255, 255, 0.1)"
         borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          />
            <Row>
                <Header
                    buttonBG="#469F49"
                    height="calc(90vh - 50px)"
                    btnLessPedding="true"
                    h2Class="h2-lg-head-custom"
                    btnTitle="Contact us"
                    heading="top"
                    hideWatchBtn="true"
                    textwidth="78"
                    head="Retail Betting Solution"
                    text="MOA Gaming’s Land-Based Sports Betting solutions are at your disposal to give you new opportunities for revenue growth. Placing a bet has become beyond convenient for your users with our land-based betting and gaming solutions. Step up your solutions game with MOA Gaming’s software for Land-Based Sports Betting."
                    bgcolor="#94AC95"    
                    href="/contact-us"
                />
                <TextImageSection
                    image="retail (2).png"
                    bgcolor="#94AC95"
                    imgbgheight="85%"
                    imgbgcolor="rgba(25, 102, 42, 0.25)"
                    head1="About"
                    head2="Retail"
                    head3="Solution"
                    footline="A Set of Functional Solutions"
                    text1="Our Retail Solution is the practical and inseparable component of your betting and gaming business if you’re looking for excellent land-based solutions. Make it extra simple for your players to place bets and experience iGaming activities to the fullest. For a fail-proof operation of your business, MOA Gaming particularly provides self-service betting terminals, betshop cashier client, pocket betshop solution, and betshop terminals."
                />
                <Row className="my-4 mx-auto justify-content-center">
                    <Col md={4} className="ps-0 ms-0 pe-0 mt-4">
                        <div className="h-100 self-service-section">
                            <Image
                                src={process.env.MIX_PUBLIC_URL + "settings.png"}
                                style={{ marginLeft: '-15%' }}
                            />
                        </div>
                    </Col>
                    <Col md={4} className="ps-4 mt-4">
                        <h2 className="ps-1 font-style-bold green-text" style={{ fontSize: '6.5vmin' }}>
                            Self-Service
                            <br />
                            Betting
                            <br />
                            Terminals
                        </h2>
                        <p className="ps-1 font-style-600" style={{ color: 'rgba(70, 159, 73, 0.8)' }}>
                            Premium Quality Land-Based Solution
                        </p>
                        <p className="ps-1 text-dark f18">
                            MOA Gaming presents self-service land-based betting
                            terminal software. It has a multi-language interface
                            and a multi-currency system. We provide you with a
                            drag-and-drop technology for the quick customization
                            of the design of your choice. MOA Gaming software
                            can coordinate with a variety of cabinets and
                            hardware. We designed software for self-service
                            Betting Terminals that provide you with Casino, Live
                            Casino games, Sportsbook, and Virtual Sports. Grant
                            your players the freedom to process via cash
                            in/ticket out and ticket in/ticket out system. MOA
                            Gaming self-service betting terminals offer pre-pay
                            customer cards and direct login. You also get:
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center my-5 pt-2 mx-auto">
                    <Col md={2} className="point-highlights p-4">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">
                            Dual screen system for point-of-sale (POS) branded
                            marketing, statistics, streaming content, and so on
                        </p>
                    </Col>
                    <Col md={2} className="point-highlights p-4">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">A bonus system</p>
                    </Col>
                    <Col md={2} className="point-highlights p-4">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">Ability to play with RFID</p>
                    </Col>
                    <Col md={2} className="point-highlights p-4">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">Payout machine</p>
                    </Col>
                </Row>

                <Row className="justify-content-center my-4 mx-auto pt-5">
                    <Col md={4} className="pe-4 pt-5 col-md-4 ps-0 mt-5">
                        <h2 className="font-style-bold green-text" style={{ fontSize: '6.5vmin' }}>
                            Betshop
                            <br />
                            Cashier Client
                        </h2>
                        <p className="green-text font-style-600">
                            A Super Flexible Solution
                        </p>
                        <p className="text-dark">
                            The software is intended for assisting BetShop
                            cashiers in placing bets, managing reports
                            (Daily/Shift), and performing a wide range of
                            transactions in a clear-cut way. MOA Gaming’s
                            excellent software involves Sportsbook, Virtual
                            Sports along with Keno, Card Horse Racing, Live Bet
                            on Poker, and more.
                        </p>
                        <p className="text-dark">
                            With the ability to easily register players and
                            deposit/withdraw funds to/from the user's account,
                            the cashiers can process bets via “Call Over.” MOA
                            Gaming’s retail betting client software stands out
                            with its fast and simple user interface. Moreover,
                            there are some key functionalities like single
                            management point with powerful administration and
                            reporting tools. We offer:
                        </p>
                    </Col>
                    <Col md={4} className="pe-0 me-0 ps-0">
                        <div className="h-100 cashier-section self-service-section">
                            <Image src={cashier} />
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center my-4 mx-auto">
                    <Col md={3} className="point-highlights py-5 pl">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">
                            Printable pre-match fixture list generation
                        </p>
                    </Col>
                    <Col md={2} className="point-highlights py-5">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">
                            Printable results generation
                        </p>    
                    </Col>
                    <Col md={3} className="point-highlights py-5 pr">
                        <div className="point-strip mb-4"></div>
                        <p className="text-dark">
                            Configurable hotkey functionality setting per market
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center my-4 solution-card-row mx-auto">
                    <Col
                        md={4}
                        className="px-4 py-5 solution-card text-center text-light me-md-2 mt-3"
                    >
                        <h2 className="px-4 pt-5">
                            Pocket Betshop
                            <br />
                            Solution
                        </h2>
                        <h6 className="px-4">Convenience and Speed</h6>
                        <p className="px-4 pb-2 pt-3 f18 d-inline-block" style={{ width:'87%' }}>
                            Placing a bet has never been easier thanks to MOA
                            Gaming’s Pocket BetShop manageable solution where
                            players can place bets right on the spot. It’s the
                            operators’ firsthand tool to accept bets from any
                            location, print out the ticket, and give it to the
                            player. Pocket BetShop’s key features include Hotkey
                            functionality and processing via cash in/ticket out
                            and ticket in/ticket out. To boost your player
                            acquisition and the marketability of our partners,
                            the Pocket BetShop device is ideal as the operator
                            makes immediate payments for win bets.{" "}
                        </p>
                        <div className="pt-2"></div>
                    </Col>
                    <Col
                        md={4}
                        className="px-4 py-5 solution-card text-center justfiy-align-center text-light ms-md-2 mt-3"
                    >
                        <h2 className="px-4 pt-5">
                            BetShop
                            <br />
                            Terminals
                        </h2>
                        <h6 className="px-4">
                            Premium Quality Land-Based Solution
                        </h6>
                        <p className="px-4 pb-2 pt-3 f18 d-inline-block" style={{ width:'87%' }}>
                            MOA Gaming introduces another excellent method to
                            easily place bets via a desktop application. Our
                            BetShop Terminal application is designed to use in
                            Betting Shops on clients' PCs. Sportsbook, Virtual
                            Sports, Casino, and Live Casino games are all
                            included in the application. Your players will be
                            able to log in via player cards and easily place
                            bets. Give your players the ultimate access to
                            authorized betting through MOA Gaming’s desktop
                            application.
                        </p>
                        <div className="pt-2"></div>
                    </Col>
                </Row>
                <div className="pt-5"></div>
                <Footer/>
            </Row>
      </Container>
        );
    }
}

export default RetailBettingSolution;
