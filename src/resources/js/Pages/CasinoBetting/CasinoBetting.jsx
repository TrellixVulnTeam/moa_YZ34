import "./CasinoBetting.style.css";
import { Row, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import TextWithImg from "../../Components/Cards/TextWithImg";
import ImgWithText from "../../Components/Cards/ImgWithText";
import BetVahan from "./../../assets/img/bet-vahan.png";
import Dart from "./../../assets/img/dart.png";
import MacWork from "./../../assets/img/mac-work.png";
import TextHeader from "../../Components/Headers/TextHeader";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

export default function CasinoBetting() {
    return (
        <Container fluid>
            <NavBar/>
             <Row>
                <Header
                    head="Casino & Betting"
                    subhead="Risk Management Services"
                    text="MOA Gaming provides betting & casino risk management services to detect and manage fraudulent activity and risky players. Our services include real-time full analysis of live casino players’ gaming patterns, 24/7 prevention of tactical and high-risk players, a flexible limiting system for both casino and sports betting, risk-free cooperations with live-casino providers, and much more. "
                    btnTitle="Contact us"
                    watchBtnClass="text-dark"
                    bgimg="grey.png"
                    headcolor="#000"
                    textcolor="#000"
                    heading="top"
                    btnLessPedding="true"
                    textWidthClass="w-md-75"
                    videoId="c2Ys2OGsDqw"
                />
                <div className="text-center position-relative d-flex justify-content-center">
                    <div>
                        <img
                            className="designingimg"
                            src={MacWork}
                            style={{
                                maxWidth: "90%",
                                position: "relative",
                                marginTop: "-10%",
                            }}
                            alt="logo"
                        />
                    </div>
                    <p className="text-light position-absolute text-over-img">
                    MOA Gaming’s risk managemposition-absolutey monitors all multi-accounts, flow rates, and players with risky behavior. We work hard to assess & control all potential threats and take the security of our users to a higher level. MOA Gaming also offers a reporting automation system allowing partners to access overall information fast. <br/><br/>
    We move forward with a clear mindset to make sure that our players are assigned in certain categories according to the existing algorithm. Our risk management department improves the gaming experience of sports betting and live casino games, AML (Anti Money Laundering), SFM (Suspicious Fixed Matches), and KYC (Know Your Customer).
                    </p>
                </div>
                <TextHeader
                        height="200px"
                        color="#000"
                        head="MOA Gaming Risk Management"
                        head1="Service Advantages "
                        fontClass="fs-1"
                    />
                <ImgWithText
                    img={Dart}
                    li1="Real-time financial analysis"
                    li2="Real-time Live Casino & Sports"
                    li33="actical play prevention"
                    li4="KYC and AML/ATF procedures"
                    li5="Robust reporting system"
                    li6="Real-time response"
                    li7="High-quality support and training"
                    li8="Highly flexible cooperations "
                    li9="A powerful segmentation "
                    li10="Payment system verification"
                    li11="Data analysis of your players’ entire lifecycle"
                    li12="Complete analysis of payment system transactions "
                    li13="Convenient and user-friendly interface"
                    li14="Player filters, groups, categories"
                    li15="Manual and automated solutions"
                    bg1="bg-black"
                    bg2="bg-grey"
                />
                <TextHeader
                        height="200px"
                        color="#000"
                        head="Sports Betting Fraud"
                        head1=" Prevention  "
                        fontClass="fs-1"
                    />
                <TextWithImg
                    text="MOA Gaming Risk Management Services are put together for sports betting fraud management and financial loss prevention. It ensures comprehensive and high-level risk management at every stage of the player’s journey, from registration to becoming a loyal user. With us, you’re guaranteed to be free from fraudulent and tactical players. MOA Gaming Risk Management Services cover dozens of leagues all over the world and check all the bets on all markets in real time to ensure the most secure and risk-free player base. "
                    img={BetVahan}
                    bg1="bg-grey"
                    bg2="bg-black"
                />
                <div className="mt-5"></div>
                <Footer/>
            </Row>
        </Container>
    );
}
