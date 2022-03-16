import { React, Component } from "react";
import { Col, Row } from "react-bootstrap";

class TextCard extends Component {
    render(props) {
        let styled1 = null;
        if (this.props.headcolor) {
            styled1 = { color: `${this.props.headcolor}` };
        }
        let align = "";
        if (this.props.align) {
            align = this.props.align;
        }
        let bgcolor = { backgroundColor: `#f8f9fa` };
        if (this.props.bgcolor) {
            bgcolor = { backgroundColor: `${this.props.bgcolor}` };
        }
        styled1.fontWeight = "700";
        return (
            <Row
                className={
                    this.props.start == "true"
                        ? "justify-content-center pt-5 m-0"
                        : "justify-content-center mt-1 m-0"
                }
            >
                <Col md={3} className="p-5 text-center" style={bgcolor}>
                    <h3
                        className={this.props.align != "" ? "text-start" : ""}
                        style={styled1}
                    >
                        {this.props.head}
                        <br/>
                        {this.props.head1}
                    </h3>
                </Col>

                <Col md={6} className="p-5 m-0" style={bgcolor}>
                    <p className="f18" style={{ color:'rgba(42, 50, 75, 0.8)' }}>{this.props.text}</p>
                </Col>
            </Row>
        );
    }
}
export default TextCard;
