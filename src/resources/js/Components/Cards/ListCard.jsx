import { React, Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "../../assets/css/feature-card.css";
import ActionButton from "../Resources/ActionButton";
class ListCard extends Component {
    render(props) {
        let styled1 = null;
        let styled2 = null;
        let styled3 = null;
        if (this.props.head1color) {
            styled1 = { color: `${this.props.head1color}` };
        }
        if (this.props.head2color) {
            styled2 = { color: `${this.props.head2color}` };
        }
        if (this.props.head3color) {
            styled3 = { color: `${this.props.head3color}` };
        }
        return (
            <Container className="px-md-5 px-sm-1">
                <div className="row align-items-md-stretch justify-content-center">
                    <div className="col-md-4 mt-sm-3">
                        <div
                            className="h-100 p-5 text-white rounded-6 feature-card-container mt-sm-3"
                            style={{ background: "#1D1D1F" }}
                        >
                            <h5
                                style={styled1}
                                className="fw-bold text-center mb-4"
                            >
                                {this.props.head1}
                            </h5>
                            <ul>
                                <li>{this.props.list1item1}</li>
                                <li>{this.props.list1item2}</li>
                                <li>{this.props.list1item3}</li>
                                <li>{this.props.list1item4}</li>
                                <li>{this.props.list1item5}</li>
                                <li>{this.props.list1item6}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 mt-sm-3">
                        <div
                            className="h-100 p-5 text-white rounded-6 feature-card-container mt-sm-3"
                            style={{ background: "#1D1D1F" }}
                        >
                            <h5
                                style={styled2}
                                className="fw-bold text-center mb-4"
                            >
                                {this.props.head2}
                            </h5>
                            <ul>
                                <li>{this.props.list2item1}</li>
                                <li>{this.props.list2item2}</li>
                                <li>{this.props.list2item3}</li>
                                <li>{this.props.list2item4}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 mt-sm-3">
                        <div
                            className="h-100 p-5 text-white rounded-6 feature-card-container mt-sm-3"
                            style={{ background: "#1D1D1F" }}
                        >
                            <h5
                                style={styled3}
                                className="fw-bold text-center mb-4"
                            >
                                {this.props.head3}
                            </h5>
                            <ul>
                                <li>{this.props.list3item1}</li>
                                <li>{this.props.list3item2}</li>
                                <li>{this.props.list3item3}</li>
                                <li>{this.props.list3item4}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default ListCard;
