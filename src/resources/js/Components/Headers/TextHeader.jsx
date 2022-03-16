import React, { Component } from "react";
import "../../assets/css/header.css";

class TextHeader extends Component {
    render(props) {
        let bgimage = null;
        let headStyle = null;
        if (this.props.bgimg) {
            bgimage = {
                background: `url(${
                    process.env.PUBLIC_URL + this.props.bgimg
                }) top center`,
            };
        }

        if (this.props.bgcolor) {
            bgimage = { background: `${this.props.bgcolor}` };
        }
        let textPaddingTop = null;
        if (this.props.textPaddingTop) {
            textPaddingTop = { paddingTop: `${this.props.textPaddingTop}` };
        }

        if (this.props.height) {
            //bgimage.height = `${this.props.height}`;
        } else {
        }
        //bgimage.height = `300px`;
        let styled = null;
        if (this.props.color) {
            styled = { color: `${this.props.color}` };
        }
        let fontClass = null;
        if (this.props.fontClass) {
            fontClass = this.props.fontClass;
        }

        return (
            <section
                className={"d-flex align-top justify-content-center gs pb-5"}
                style={bgimage}
            >
                <div className="container position-relative mt-5">
                    <div className="row d-none d-lg-flex h-8"></div>
                    <h2 style={styled} className={"mt-5 " + fontClass}>
                        {this.props.head}
                    </h2>
                    <h2 style={styled} className={fontClass}>
                        {this.props.head1}
                    </h2>
                    <p style={textPaddingTop} className="text-dark">
                        {this.props.text}
                    </p>
                </div>
            </section>
        );
    }
}

export default TextHeader;
