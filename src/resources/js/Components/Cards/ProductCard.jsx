import Col from "react-bootstrap/Col";
import { React, Component } from "react";
import { Image } from "react-bootstrap";

class ProductCard extends Component {
    render(props) {
        let bg = { background: `${this.props.bgcolor}` };
        let colSize = this.props.colSize ? this.props.colSize : 4;
        if (this.props.border) {
            bg.border = this.props.border;
        }
        if (this.props.text == "center") {
            return (
                <Col
                    md={colSize}
                    style={bg}
                    className="product-card px-0 payment-card"
                >
                    <div className="p-4">
                        <div className="text-center payment-product-card-img">
                            <Image
                                src={this.props.img}
                                className="mx-80"
                                alt="logo"
                            />
                        </div>
                        <div className="m-2 mt-5 text-center">
                            <h4 className="text-light fw-bold ">
                                {this.props.head}<br/>
                                {this.props.head2}
                            </h4>
                            <div className="text-md-center text-light">
                                <p className="fs-8 rgb-white">
                                    {this.props.footline}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            );
        } else {
            return (
                <Col md={colSize} style={bg} className="product-card px-0">
                    <div className="p-4">
                        <div className="text-center product-card-img">
                            <Image
                                src={this.props.img}
                                className="mx-80"
                                alt="logo"
                            />
                        </div>
                        <div className="m-2 mt-5 text-start">
                            <h4 className="text-light fw-bold">
                                {this.props.head}
                            </h4>
                            <div className="text-md-start text-light">
                                <p className="fs-8 rgb-white">
                                    {this.props.footline}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            );
        }
    }
}
export default ProductCard;
