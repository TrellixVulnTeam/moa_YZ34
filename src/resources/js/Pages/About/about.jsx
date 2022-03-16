import React, { Component, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Header from "./../../Components/Headers/Header";
import office from "./../../assets/img/office.png";

import circle from "./../../assets/img/circle.svg";
import v4 from "./../../assets/img/v4.svg";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import "./about.css";
import OurSolutions from "../../Components/Resources/OurSolutions";

class About extends Component {
    render() {
        return (
            <Row>
                <Container fluid>
                    <NavBar />
                    <Header
                        head="Notification App"
                        text="MOA Gaming notification app allows your users to get notified about the latest updates in the most uncomplicated way. You can have immediate product updates, financial updates, updates on domain changes, bonuses, promo codes, events, and whatnot. "
                        bgimg={office}
                    />

                    <section id="out-solutions">
                        <div className="container">
                            <div className="section-title">
                                <h2>Our Solutions </h2>
                                <p className="grey">
                                    MOA Gaming presents a range of world-class
                                    solutions to launch your online iGaming
                                    business. Reach out to us and receive MOA
                                    Gaming’s reliable betting and gaming
                                    solutions tailored to your business
                                    objectives.
                                </p>
                                <OurSolutions />
                            </div>
                        </div>
                    </section>

                    <Container className="justify-content-center mt-5 pt-5">
                        <Row className="justify-content-center"></Row>
                    </Container>
                </Container>
                <Footer />
            </Row>
        );
    }
}
export default About;
