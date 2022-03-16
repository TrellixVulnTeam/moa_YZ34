import "./EventsPage.style.css";
import { Row, Container } from "react-bootstrap";
import Event1 from "./../../assets/img/event-1.png";
import Event2 from "./../../assets/img/event-2.png";
import Event3 from "./../../assets/img/event-3.png";
import EventCard from "./../../Components/Cards/EventCard";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

export default function EventsPage() {
    return (
        <Container fluid>
            <NavBar/>
            <Row>
                <section className="background d-flex section-title">
                    <div className="d-flex d-column justify-content-center mx-auto mt-auto mb-auto">
                        <Row>
                            <div style={{ maxWidth: "70vw" }}>
                                <h2 className="text-light text-center f-bold">
                                    EVENTS
                                </h2>
                                <p className="text-light text-center">
                                    Meet the MOA team at the most anticipated
                                    iGaming events all around the world. Interested?
                                    Check out the list of our upcoming events to
                                    book a meeting.
                                </p>
                            </div>
                            <a href="#event-section" className="icon-position">
                                <i class="arrow down dw-a"></i>
                            </a>
                        </Row>
                    </div>
                </section>
                <section id="event-section" className="m-t">
                    <EventCard
                        head="Sport Event"
                        foot="Dubai, UAE21 Mar - 24 Mar 2022"
                        image={Event1}
                        href="./upcoming-event"
                    />
                    <EventCard
                        head="Inovation Expo"
                        foot="UK, London, 21 Mar - 24 Mar 2022"
                        image={Event2}
                        href="./upcoming-event"
                    />
                    <EventCard
                        head="Sport Event"
                        foot="Dubai, UAE21 Mar - 24 Mar 2022"
                        image={Event3}
                        href="./upcoming-event"
                    />
                </section>
                <Footer/>
            </Row>
        </Container>
    );
}
