import "./WorldClassSolutions.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./../../Components/Headers/Header";
import WhyChooseMoa from "../../Components/WhyChooseMoa";
import ActionButton from "../../Components/Resources/ActionButton";
import IconTurkey from "./../../assets/img/icon-turkey.png";
import IconWhiteLable from "./../../assets/img/icon-white-label.png";
import IconAPI from "./../../assets/img/icon-api.png";
import IconRetail from "./../../assets/img/icon-retail.png";
import API from "./../../assets/img/api.png";
import Retail from "./../../assets/img/retail.png";
import Player from "./../../assets/img/player.png";
import TextHeader from "../../Components/Headers/TextHeader";
import FeatureCard from "../../Components/Cards/FeatureCard";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import { Component } from "react";
import ModalVideo from "react-modal-video";
// import "../../../../node_modules/react-modal-video/scss/modal-video.scss";

class WorldClassSolutions extends Component {
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
                    head="World-Class Solutions"
                    head1="Upon Your Access"
                    text="Enter The Igaming Industry With Your Successful Betting And Gaming Business And Generate Revenue With The Help Of Moa Gaming’s Premium Solutions."
                    bgimg="world-class.png"
                    btnTitle="Contact Us"
                    mheader="true"
                    href="./contact-us"
                    marginTop="m-t-5"
                    textpadding="3rem"
                    buttonBG="#000"
                />
                <div className="text-center">
                    <div>
                        <Row>
                            <Col md="6" className="ps-0">
                                <Col className="card-turkey rel-card p-5">
                                    <div className="d-inline-flex justify-content-center">
                                        <img
                                            src={IconTurkey}
                                            className="img-fluid"
                                            alt="logo"
                                        />
                                        <h2 className="ps-2 fs-res pt-4">
                                            Turnkey
                                        </h2>
                                    </div>
                                    <h6 className="pt-3">
                                        A Convenient Business Solution
                                    </h6>
                                    <p className="pt-4 px-5">
                                        Your Hands-on Access To The Opportunity Of
                                        Creating An Independent Online Betting And
                                        Gaming Business, Operating Under Your Own
                                        License. Receive An Entirely Customizable
                                        Website With A Powerful Back-office For Your
                                        Business.
                                    </p>
                                    <ActionButton
                                        text="Contact Us"
                                        variant="dark"
                                        href="#"
                                        className="mt-3 px-5"
                                        iconClass="bi bi-chevron-right ps-2"
                                    />
                                </Col>
                            </Col>
                            <Col md="6" className="pe-0">
                                <Col className="card-turkey rel-card p-5">
                                <div className="d-inline-flex">
                                    <img
                                        src={IconWhiteLable}
                                        className="img-fluid"
                                        alt="logo"
                                    />
                                    <h2 className="ps-2 fs-res pt-4">
                                        White Label
                                    </h2>
                                </div>
                                <h6 className="pt-4">
                                    A Convenient Business Solution
                                </h6>
                                <p className="pt-4 px-5">
                                    Moa Gaming’s White Label Is A Ready-made
                                    Solution Offering You<br/>All The Necessary
                                    Elements And Features Needed For
                                    Establishing<br/>A Strong Betting And Gaming
                                    Business Under Our Curacao And Malta
                                    Licenses.
                                </p>
                                <ActionButton
                                    text="Contact Us"
                                    variant="dark"
                                    href="#"
                                    className="mt-3 px-5"
                                    iconClass="bi bi-chevron-right ps-2"
                                />
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="pt-4">
                    <TextHeader
                        height="300px"
                        color="#000"
                        head="White Lable vs Turnkey"
                        bgcolor="#F5F5F7"
                        text="MOA Gaming’s White Label is a ready-made solution offering you all the necessary elements and features needed for establishing a strong betting and gaming business under our Curacao and Malta licenses."
                        textPaddingTop="3rem"
                    />
                </div>
                <FeatureCard
                    mainClass="feature-world-class"
                    head1="Turnkey"
                    head2="White Label"
                    list1item1="Operation under operator’s own gaming license"
                    list1item2="Time-consuming"
                    list1item3="Start from scratch"
                    list1item4="Wide range of settings "
                    list1item5="Operator reports to the regulator"
                    list1item6="Operator’s agreement with payment providers"
                    list1item7="24/7 Support"
                    list2item1="Operation under MOA Gaming license "
                    list2item2="Quick start"
                    list2item3="Only the main settings available"
                    list2item4="MOA Gaming reports to the regulator"
                    list2item5="Integrated payment methods"
                    list2item6="24/7 Support"
                    list1tickcolor="white-item"
                    list2tickcolor="white-item"
                    head1color="#fff"
                    head2color="#fff"
                    bgclass="bg-oned"
                    btnclass="bgdark"
                />
                <section id="white-label-vs-turnkey">
                    <div className="container">
                        <div className="section-title p-t-9">
                            <Row className="text-start justify-content-center">
                                <Col md="6" className="p-5 card-turkey">
                                    <div className="d-inline-flex">
                                        <h3 className="ps-2 font-12vmin">API</h3>
                                        <img
                                            src={IconAPI}
                                            className="mt-4 pt-2 ms-2"
                                            width={60}
                                            height={60}
                                            alt="logo"
                                        />
                                    </div>
                                    <h6 className="pt-4">A Comprehensive and Simple Approach</h6>
                                    <p  className="pt-4 pb-4">
                                        MOA Gaming’s White Label is a ready-made
                                        solution offering you all the necessary
                                        elements and features needed for
                                        establishing a strong betting and gaming
                                        business under our Curacao and Malta
                                        licenses.
                                    </p>
                                    <ActionButton
                                        text="Contact Us"
                                        variant="dark"
                                        href="#"
                                        className="mt-3 px-5"
                                        iconClass="bi bi-chevron-right ps-2"
                                    />
                                </Col>
                                <Col md="6" className="p-5 card-turkey bg-grey">
                                    <img
                                        src={API}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>

                                <Col
                                    md="6"
                                    className="p-5 card-turkey bg-grey mt-5"
                                >
                                    <img
                                        src={Retail}
                                        className="retail-img-pos"
                                        alt="logo"
                                    />
                                </Col>
                                <Col md="6" className="p-5 card-turkey">
                                    <div className="d-inline-flex">
                                        <h3 className="font-12vmin">Retail</h3>
                                        <img
                                            src={IconRetail}
                                            className="mt-2 ms-2"
                                            width={45}
                                            height={60}
                                            alt="logo"
                                        />
                                    </div>
                                    <h6 className="pt-4">A Super Convenient Solution</h6>
                                    <p  className="pt-4 pb-4">
                                        MOA Gaming’s White Label is a ready-made
                                        solution offering you all the necessary
                                        elements and features needed for
                                        establishing a strong betting and gaming
                                        business under our Curacao and Malta
                                        licenses.
                                    </p>
                                    <ActionButton
                                        text="Contact us"
                                        variant="dark"
                                        href="#"
                                        className="mt-3 px-5"
                                        iconClass="bi bi-chevron-right ps-2"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
                <section id="white-label-vs-turnkey">
                    <div className="section-title p-t-5 m-t-12">
                        <Container>
                            <h3 className="fw-bolder font-48px text-dark">
                                Full Access to MOA Gaming’s Advanced Tools{" "}
                            </h3>
                            <p className="text-dark pt-4 pb-4">
                                {" "}
                                Once you’re a MOA Gaming partner, you get full
                                access to our advanced tools, which include CRM,
                                Bonus System, and BackOffice. Each tool has a
                                lot to offer to help your business grow
                                stronger.{" "}
                            </p>
                        </Container>
                        <div className="text-start mt-5">
                            <Row className="bg-grey mt-1 justify-content-center">
                                <Col md="7" className="p-5 card-turkey">
                                    <h3>CRM</h3>
                                    <p className="fs-7">
                                        Customer relationship management (CRM)
                                        is a technology that helps businesses to
                                        manage their interactions with their
                                        present and potential customers.
                                        <br /> <br /> This is a new and powerful
                                        automated marketing and analytics tool,
                                        which can help you boost your
                                        reactivation and retention. There is a
                                        long list of features that you can use
                                        and earn more opportunities to expand
                                        your business.
                                        <br /> <br /> We offer RFM segmentation
                                        with over 20 filters and a real-time
                                        customer journey. Additionally, we can
                                        provide you with high-class and
                                        effective marketing campaigns through
                                        Email, SMS, MailChimp, or Telegram and
                                        careful real-time campaign monitoring.
                                        <br /> <br />
                                        If you’re looking for a way to grow your
                                        business, then MOA Gaming’s CRM is the
                                        tool you need.
                                    </p>
                                </Col>
                                <Col md="3" style={{ cursor:'pointer' }} onClick={()=>this.openModal('WSWmYX4U0fM')} >
                                    <img
                                        src={Player}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                            <Row className="bg-grey mt-1 justify-content-center">
                                <Col md="7" className="p-5 card-turkey">
                                    <h3>Bonus System </h3>
                                    <p className="fs-7">
                                        MOA Gaming’s Bonus System is the best
                                        tool for creating Sportsbook and Casino
                                        Bonuses. All kinds of bonuses are
                                        available on our platform: Free Spins,
                                        Free Bets, Wagering Bonuses, and more!
                                        <br /> <br />
                                        By creating bonuses you can set up
                                        personalized User Journeys on your
                                        platform, as well as maximize your
                                        engagement, grow reactivation, and
                                        minimize your bonus costs. Besides being
                                        able to edit, track and manage your
                                        bonuses with a few clicks, you can also
                                        receive detailed reports about your
                                        setup bonuses.
                                    </p>
                                </Col>
                                <Col md="3" style={{ cursor:'pointer' }} onClick={()=>this.openModal('2x_GbfIe9mE')} >
                                    <img
                                        src={Player}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                            <Row className="bg-grey mt-1 justify-content-center">
                                <Col md="7" className="p-5 card-turkey">
                                    <h3>BackOffice</h3>
                                    <p className="fs-7">
                                        Here’s the gigantic and yet simple place
                                        where you can manage your business along
                                        with its data, players, transactions,
                                        and reports. <br />
                                        <br /> Using our advanced filters, you
                                        can have access to statistics of a
                                        specific date, week or month, and get
                                        helpful and detailed information about
                                        Players’ KPIs, Payments, Bonuses,
                                        Transactions, and Limits. And this is
                                        just the beginning.
                                    </p>
                                </Col>
                                <Col md="3" style={{ cursor:'pointer' }} onClick={()=>this.openModal('k7TYPLlDT9E')} >
                                    <img
                                        src={Player}
                                        className="mx-100"
                                        alt="logo"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
                <section className="m-t-9">
                    <Container>
                        <div className="section-title">
                            <WhyChooseMoa
                                className="border-radius"
                                justify="center"
                            />
                        </div>
                    </Container>
                </section>
                <Footer />
            </Row>
        </Container>
    );
}
};
export default WorldClassSolutions;
