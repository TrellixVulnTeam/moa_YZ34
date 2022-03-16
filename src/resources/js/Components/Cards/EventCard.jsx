import { React, Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
class EventCard extends Component {
    render(props) {
        return (
            <section>
                <div className="container">
                    <Row className="text-start mt-5 p-0 c-l">
                        <Col md="4" className="p-3 bg-grey p-0 c-l">
                            <h4>{this.props.head}</h4>
                            <p>{this.props.foot}</p>
                            <div>
                                <Button
                                    variant="dark"
                                    size="md"
                                    style={{ backgroundColor: "#000" }}
                                    className="px-3 py-2"
                                    href={this.props.href}
                                    active
                                >
                                    Book A Meeting
                                    <i
                                        style={{ marginLeft: "1rem" }}
                                        className="btnarrow right"
                                    ></i>
                                </Button>
                            </div>
                        </Col>
                        <Col
                            md="8"
                            className="p-0 d-flex justify-content-center"
                        >
                            <img
                                src={this.props.image}
                                className="mx-100"
                                alt="logo"
                            />
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default EventCard;
