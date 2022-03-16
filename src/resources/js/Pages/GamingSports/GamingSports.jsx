import "./GamingSports.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import TextWithImg from "../../Components/Cards/TextWithImg";
import ImgWithText from "../../Components/Cards/ImgWithText";
import Ground from "./../../assets/img/ground.png";
import MoaLap from "./../../assets/img/moa-lap.png";
import GroundCup from "./../../assets/img/ground-cup.png";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

export default function GamingSports() {
    return (
        <Container fluid>
            <NavBar/>
                <Row>
                <Header
                    head="MOA Gaming Sports"
                    text="MOA Gaming offers access to the most popular and major sports brands. With our sports sponsorship packages, your brand name will be presented worldwide on the most popular platforms. "
                    btnTitle="Contact us"
                    watchBtnClass="text-dark"
                    bgimg="grey.png"
                    headcolor="#000"
                    textcolor="#000"
                    href="./contact-us"
                    videoId="As0W-20ydIc"
                />
                <div
                    className="no-repeat d-none d-md-block"
                    style={{
                        background: `url(${GroundCup}) top center`,
                        backgroundSize: "82%",
                    }}
                >
                    <Row
                        className="justify-content-end text-light "
                        style={{ marginTop: "20%" }}
                    >
                        <Col md={4}>
                            <span className="lh-lg">
                                • Massive Worldwide Attention <br />
                                • Increasing Website Traffic <br />
                                • Brand Awareness <br />
                            </span>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={4}>
                            <span className="lh-lg">
                                • Targeted Advertising <br />
                                • Fan Loyalty <br />
                                • 360° Marketing Tool <br />
                            </span>
                        </Col>
                    </Row>
                    <div className="text-center text-light py-5">
                        <h2 className="fw-bold">Sports Sponsorship Advantages</h2>
                        <h5>We win And tea Together With Client</h5>
                    </div>
                </div>

                {/* Ground image and text view for mobile and tablet*/}
                <div className="d-xs-flex d-sm-flex d-md-none d-lg-none">
                    <Row>
                        <div
                            className="text-center"
                            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
                        >
                            <h2 className="fw-bold">
                                Sports Sponsorship Advantages
                            </h2>
                            <h5>We win And tea Together With Client</h5>
                        </div>
                        <div
                            style={{
                                textAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                style={{
                                    width: "80%",
                                }}
                                src={GroundCup}
                                alt="img"
                            />
                        </div>
                        <div style={{ marginTop: "2rem", marginLeft: "10%" }}>
                            <span>
                                • Massive Worldwide Attention <br />
                                • Increasing Website Traffic <br />
                                • Brand Awareness <br />
                                • Targeted Advertising <br />
                                • Fan Loyalty <br />
                                • 360° Marketing Tool <br />
                            </span>
                        </div>
                    </Row>
                </div>
                {/* ............................................. */}

                <ImgWithText
                    head="What is Sports Sponsorship? "
                    text="Sports sponsorship is a powerful and impactful marketing technique. It creates an association between the company, a sports club, or the event. Sports has always been a considerable profit-driver, increasing the brand awareness of the most famous brands all around the world."
                    btnHide="true"
                    bg="light"
                    img={Ground}
                />
                <TextWithImg
                    head="LED Virtual Advertisements"
                    text="With MOA Gaming, you can place your brand on the perimeter LED screens during the live streamings of football matches. The multimillion audience will surely notice your brand and therefore you will see a major increase in your brand awareness. MOA Gaming offers you the best spots to advertise your products on the most popular football pitches."
                    btnHide="true"
                    img={MoaLap}
                />
              <Footer/>
            </Row>
        </Container>
    );
}
