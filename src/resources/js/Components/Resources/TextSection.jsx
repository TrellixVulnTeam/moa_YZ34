import { React, Component } from "react";
import { Row } from "react-bootstrap";
import "../../assets/css/text-section.css";
import ActionButton from "./ActionButton";

class TextSection extends Component {
    render(props) {
        let styled = {};
        let bgcolor = { background: `${this.props.bgcolor}` };
        const headcolor = { color: `${this.props.headColor}` };
        let footlineColor = { color: `${this.props.headColor}` };
        if (this.props.footlineColor) {
            footlineColor = { color: `${this.props.footlineColor}` };
        }
        if (this.props.bgimg) {
            styled.background = `url(${
                process.env.MIX_PUBLIC_URL + this.props.bgimg
            })`;
            styled.backgroundSize = `cover`;
        }
        return (
            <section className={"align-top text-section pt-3"} style={styled}>
                <Row className="z-index pt-5">
                    <div className="col-md-12 d-flex justify-content-center pt-5">
                        <h1 style={headcolor}>{this.props.head}</h1>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <small style={footlineColor}>{this.props.footline}</small>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6 mx-auto text-center py-3">
                            <p className="text-center pb-4 gshp">{this.props.text1} <br/> {this.props.text1_2} </p>
                            {this.props.text2 ? (
                                <p className="text-center pb-4 gshp">
                                    {this.props.text2}
                                </p>
                            ) : (
                                ""
                            )}
                            {this.props.text2 ? (
                                <p className="text-center pb-4 gshp">
                                    {this.props.text3}
                                </p>
                            ) : (
                                ""
                            )}
                            {!this.props.footline2 ? (
                                <ActionButton
                                    video="true"
                                    videoId={this.props.videoId}
                                    textcolor="#FFFFFF"
                                    text="Watch the video"
                                    variant="transparent"
                                    href="#"
                                    className="px-5"
                                    iconClass="bi bi-play-circle ps-2"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    {this.props.footline2 ? (
                        <div className="col-md-12 d-flex justify-content-center">
                            <small style={footlineColor}>
                                {this.props.footline2}
                            </small>
                        </div>
                    ) : (
                        ""
                    )}
                    {this.props.footline2text ? (
                        <div className="col-md-12">
                            <div className="col-md-6 mx-auto text-center py-3">
                                <p className="text-center pb-4 gshp">
                                    {this.props.footline2text} <br/><br/> {this.props.footline2_2text}
                                </p>
                                <ActionButton
                                    textcolor="#FFFFFF"
                                    text="Watch the video"
                                    variant="transparent"
                                    href="#"
                                    video="true"
                                    videoId={this.props.videoId}
                                    className="px-5"
                                    iconClass="bi bi-play-circle ps-2"
                                />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </Row>
            </section>
        );
    }
}
export default TextSection;
