import { repeat } from "lodash";
import { React, Component } from "react";
import { Row, Col } from "react-bootstrap";

class HeadingTextCard extends Component {
    render(props) {
        let subhead = null;
        if (this.props.subhead) {
            subhead = this.props.subhead;
        }
        let styleRow = null;
        if (this.props.bgcolor) {
            styleRow = {
                background: `${this.props.bgcolor}`,
                borderRadius: "10px",
            };
        }
        if (this.props.bgimg) {
            styleRow = {
                background: `url(${
                    process.env.MIX_PUBLIC_URL + this.props.bgimg
                }) top center`,
                backgroundSize: "cover",
            };
        }
        let fontcolor = null;
        if (this.props.fontcolor) {
            fontcolor = { color: `${this.props.fontcolor}` };
        }
        return (
            <section
                id="how-we-deliver"
                style={{
                    marginTop: "10%",
                    padding: 0,
                    marginBottom: "7%",
                    maxWidth: "100%",
                }}
            >
                <div style={{ margin: "0px", maxWidth: "100%" }}>
                    <div className="section-title text-start">
                        <Row style={styleRow} className="radius-8">
                            <Col
                                md="8"
                                className={
                                    this.props.col1padding
                                        ? "p-" + this.props.col1padding
                                        : ""
                                }
                            >
                                <h2 style={fontcolor}>{this.props.head}</h2>
                            </Col>
                            <Col
                                md="4"
                                className={
                                    "d-flex flex-column justify-content-center"
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

export default HeadingTextCard;
