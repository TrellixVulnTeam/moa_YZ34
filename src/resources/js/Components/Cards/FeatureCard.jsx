import { React, Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "../../assets/css/feature-card.css";
import ActionButton from "../Resources/ActionButton";
class FeatureCard extends Component {
    render(props) {
        let styled1 = null;
        let styled2 = null;
        if (this.props.head1color) {
            styled1 = { color: `${this.props.head1color}` };
        }
        if (this.props.head2color) {
            styled2 = { color: `${this.props.head2color}` };
        }
        let bgclass = "bg-dark";
        if (this.props.bgclass) {
            bgclass = this.props.bgclass;
        }
        let btnclass = "";
        if (this.props.btnclass) {
            btnclass = this.props.btnclass;
        }
        return (
            <Container className="px-md-5 px-sm-1">
                <div className="row align-items-md-stretch justify-content-center">
                    <div className="col-md-4">
                        <div
                            className={
                                "h-100 p-sm-5 text-white rounded-6 feature-card-container position-relative mt-sm-3 " +
                                bgclass
                            }
                        >
                            <h2 style={styled1} className="pt-5 text-center mb-4">
                                {this.props.head1}
                            </h2>
                            <ListGroup variant="flush" className="feature-card">
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item1}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item2}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item3}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item4}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item5}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item6}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list1tickcolor}
                                >
                                    {this.props.list1item7}
                                </ListGroup.Item>
                            </ListGroup>
                            <Row className="justify-content-center text-center pt-5 mt-5">
                                <Col
                                    md="10"
                                    className="position-absolute"
                                    style={{ bottom: "8%" }}
                                >
                                    <ActionButton
                                        text="Contact Us"
                                        variant="dark"
                                        href="#"
                                        className={"px-5 " + btnclass}
                                        iconClass="bi bi-chevron-right ps-2"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className={
                                "h-100 p-sm-5 text-white rounded-6 feature-card-container mt-3 position-relative " +
                                bgclass
                            }
                        >
                            <h2 style={styled2} className="pt-5 text-center mb-4">
                                {this.props.head2}
                            </h2>
                            <ListGroup variant="flush" className="feature-card">
                                <ListGroup.Item
                                    className={this.props.list2tickcolor}
                                >
                                    {this.props.list2item1}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list2tickcolor}
                                >
                                    {this.props.list2item2}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list2tickcolor}
                                >
                                    {this.props.list2item3}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list2tickcolor}
                                >
                                    {this.props.list2item4}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list2tickcolor}
                                >
                                    {this.props.list2item5}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={this.props.list2tickcolor}
                                >
                                    {this.props.list2item6}
                                </ListGroup.Item>
                            </ListGroup>
                            <Row className="justify-content-center text-center pt-5 mt-5">
                                <Col
                                    md="10"
                                    className="position-absolute"
                                    style={{ bottom: "8%" }}
                                >
                                    <ActionButton
                                        text="Contact Us"
                                        variant="dark"
                                        href="#"
                                        className={"px-5 " + btnclass}
                                        iconClass="bi bi-chevron-right ps-2"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default FeatureCard;
