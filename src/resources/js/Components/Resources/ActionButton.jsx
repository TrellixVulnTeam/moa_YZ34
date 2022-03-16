import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "../../assets/css/action-button.css";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
// import "../../../../node_modules/react-modal-video/scss/modal-video.scss";

class ActionButton extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render(props) {
        let styled = { color: `${this.props.textcolor}` };
        if (this.props.style) {
            styled = { ...styled, ...this.props.style };
        }
        return this.props.video === "true" ? (
            <span>
                <Button
                    variant={this.props.variant}
                    size="lg"
                    href={this.props.href}
                    className={this.props.className}
                    style={styled}
                    onClick={this.openModal}
                >
                    {this.props.iconClass && this.props.left == "true" ? (
                        <i className={this.props.iconClass}></i>
                    ) : (
                        ""
                    )}
                    {this.props.text}
                    {this.props.iconClass && this.props.left == undefined ? (
                        <i className={this.props.iconClass}></i>
                    ) : (
                        ""
                    )}
                </Button>

                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId={this.props.videoId}
                    onClose={() => this.setState({ isOpen: false })}
                />
            </span>
        ) : (
            
                <Button
                    variant={this.props.variant}
                    size="lg"
                    href={this.props.href}
                    className={this.props.className}
                    style={styled}
                    onClick={this.props.onClick}
                >
                    {this.props.iconClass && this.props.left == "true" ? (
                        <i className={this.props.iconClass}></i>
                    ) : (
                        ""
                    )}
                    {this.props.text}
                    {this.props.iconClass && this.props.left == undefined ? (
                        <i className={this.props.iconClass}></i>
                    ) : (
                        ""
                    )}
                </Button>
            
        );
    }
}
export default ActionButton;
