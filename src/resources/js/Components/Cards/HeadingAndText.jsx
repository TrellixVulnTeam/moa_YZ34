import { React, Component } from "react";
import { Row, Col } from "react-bootstrap";

class HeadingAndText extends Component {
    render(props) {
        let subhead = null;
        if (this.props.subhead) {
            subhead = this.props.subhead;
        }
        let styleRow = null;
        if (this.props.bgcolor) {
            styleRow = {
                background: `${this.props.bgcolor}`,
                borderRadius: "5px",
            };
        }
        let fontcolor = null;
        if (this.props.fontcolor) {
            fontcolor = { color: `${this.props.fontcolor}` };
        }
        return (
            <section id="how-we-deliver">
                <div className="container">
                    <div className="section-title p-md-5 p-sm-2 text-start">
                        <Row style={styleRow}>
                            <Col
                                md="6"
                                className={
                                    this.props.col1padding
                                        ? "p-" + this.props.col1padding
                                        : ""
                                }
                            >
                                <h2 style={fontcolor}>{this.props.head}</h2>
                            </Col>
                            <Col
                                md="6"
                                className={
                                    this.props.col2padding
                                        ? "p-" + this.props.col2padding
                                        : ""
                                }
                            >
                                <h4 className="fw-bold fs-5" style={fontcolor}>
                                    {subhead}
                                </h4>
                                <p style={fontcolor}>{this.props.text}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeadingAndText;
