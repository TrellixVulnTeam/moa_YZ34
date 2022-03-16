import React, { Component, useEffect, useState } from "react";
import ActionButton from "../Resources/ActionButton";
import "../../assets/css/header.css";
import ButtonEffect from "../Resources/ButtonEffect";
import { useLocation } from "react-router-dom";

function Header(props) {
    const location = useLocation();
    let bgimage = {};
    let buttonBG = null;
    let btnTitle = "Products";
    let mheader = "false";
    let mbgimg = "";
    const bl = window.innerWidth < 837 ? true : false;
    const [isMobile, setMobile] = useState(bl);

    React.useEffect(() => {
        const handleWindowResize = () => {
            const bool = window.innerWidth < 576 ? true : false;
            setMobile(bool);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    if (props.bgimg) {
        mbgimg = "m-" + props.bgimg;
        let backgroundImage =
            process.env.MIX_PUBLIC_URL +
            (isMobile && mheader ? mbgimg : props.bgimg);
        bgimage = {
            background: `url(${backgroundImage}) top center`,
        };
    }
    if (props.mheader) {
        mheader = props.mheader;
    }
    if (props.bgcolor) {
        bgimage = { background: `${props.bgcolor}` };
    }

    if (props.height) {
        bgimage.minHeight = `${props.height}`;
    } else {
        bgimage.minHeight = `100vh`;
    }
    if (props.buttonBG) {
        buttonBG = { background: `${props.buttonBG}` };
    }
    if (props.btnTitle) {
        btnTitle = props.btnTitle;
    }
    let headstyle = null;
    if (props.headcolor) {
        headstyle = { color: `${props.headcolor}` };
    }
    let textstyle = {};
    if (props.textcolor) {
        textstyle = {
            color: `${props.textcolor}`,
            paddingTop: `${props.textpaddingtop}`,
        };
    }
    if (props.textwidth) {
        textstyle.width = `${props.textwidth}%`;
     }

    if (props.textpadding) {
        textstyle = {
            paddingTop: `${props.textpadding}`,
        };
    }
    let watchBtnClass = "text-light";
    if (props.watchBtnClass) {
        watchBtnClass = { color: `${props.watchBtnClass}` };
    }
    let head1 = "";
    if (props.head1) {
        head1 = props.head1;
    }
    let head2 = "";
    if (props.head2) {
        head2 = props.head2;
    }
    let h2Class = "";
    if (props.h2Class) {
        h2Class = props.h2Class;
    }
    let textWidth = '';
    if (props.textWidthClass) {
        textWidth = props.textWidthClass;
    }
    let marginTop = null;
    if (!props.heading || (props.heading && props.heading != "top")) {
        if (props.marginTop != null) {
            marginTop = props.marginTop;
        } else {
            marginTop = "mt-5";
        }
    } else if (props.marginTop != null) {
        marginTop = props.marginTop;
    }

    let btnMargin = "mt-5";
    if (props.btnLessPedding) {
        btnMargin = "";
    }

    return (
        <section
            className={"d-flex align-top justify-content-center gs"}
            style={bgimage}
        >
            <div className={"container position-relative " + marginTop}>
                <div className={"row d-none d-lg-flex h-8 " + marginTop}></div>
                <h2 className={h2Class} style={headstyle}>
                    {props.head}{" "}
                    {head1 ? (
                        <span>
                            <br />
                            {head1}
                        </span>
                    ) : (
                        ""
                    )}{" "}
                    {head2 ? (
                        <span>
                            <br />
                            {head2}
                        </span>
                    ) : (
                        ""
                    )}{" "}
                </h2>
                <h4 className={props.subheadClass}>{props.subhead}</h4>
                <p className={"d-inline-block fs18 " + textWidth} style={textstyle}>
                    {props.text}
                </p>
                <p className={"pt-2  " + btnMargin + " " + props.btnClass}>
                    {props.btnEffect ? 

                    buttonBG != null ? (
                        <ButtonEffect 
                        href={props.href} 
                        text={btnTitle}
                        className="px-5"
                        style={buttonBG}
                         />
                    ) : (
                        <ButtonEffect 
                         href={props.href} 
                         text={btnTitle}
                         className="px-5"
                          />
                        
                    )
                    : 
                    <ActionButton
                        text={btnTitle}
                        variant="transparent"
                        href={props.href}
                        className={"px-5 text-light slideRightAnimate border-radius"}
                        style={buttonBG}
                        iconClass="bi bi-chevron-right ps-2"
                    />
                    }
                    {props.hideWatchBtn == "true" ? (
                        ""
                    ) : (
                        <ActionButton
                            video="true"
                            videoId={props.videoId}
                            text="Watch the video"
                            variant="transparent"
                            href="#"
                            className={"px-5 " + watchBtnClass}
                            iconClass="bi bi-play-circle ps-2"
                        />
                    )}
                </p>
            </div>
        </section>
    );
}

export default Header;
