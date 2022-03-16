import { React, Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/css/text-with-img.css";

class ImgWithTextWithoutBtn extends Component {
    render(props) {
        return (
            <div>
                {this.props.imageDirection === "Left" ? (
                    <Row
                        className="text-with-img d-flex justify-content-center"
                        style={{ marginTop: "7%" }}
                    >
                        <Col md="5">
                            <img
                                src={this.props.img}
                                style={{ maxWidth: "100%", margin: "auto" }}
                            />
                        </Col>
                        <Col md="5" className="p-4">
                            <h2>{this.props.head}</h2>
                            <h4>{this.props.subhead}</h4>
                            <p className="mt-3">{this.props.text}</p>
                        </Col>
                    </Row>
                ) : (
                    <Row
                        className="text-with-img d-flex justify-content-center"
                        style={{ marginTop: "7%" }}
                    >
                        <Col md="5" className="p-4">
                            <h2>{this.props.head}</h2>
                            <h4>{this.props.subhead}</h4>
                            <p className="mt-3">{this.props.text}</p>
                        </Col>
                        <Col md="5">
                            <img
                                src={this.props.img}
                                style={{ maxWidth: "100%", margin: "auto" }}
                            />
                        </Col>
                    </Row>
                )}
            </div>
        );
    }
}

export default ImgWithTextWithoutBtn;
