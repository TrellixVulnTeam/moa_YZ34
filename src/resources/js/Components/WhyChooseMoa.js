import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseMoa = (props) => {
    let style = null;
    let clsName = "rounded";
    if (props.bgimg) {
        style = {
            background: `url(${process.env.MIX_PUBLIC_URL + props.bgimg})`,
        };
        style.backgroundSize = `cover`;
    }
    if (!props.bgimg) {
        style = { backgroundColor: "#2e2e30" };
    }
    if (props.bgcolor) {
        style = { background: props.bgcolor };
    }
    if (props.className) {
        clsName = clsName + " " + props.className;
    }
    if (props.justify) {
        clsName = clsName + " " + "justify-content-" + props.justify;
    } else {
        clsName = clsName + " " + "justify-content-center";
    }

    return (
        <section id="blog">
            <Row className={clsName} style={style}>
                <div className="section-title p-5 text-md-start">
                    <h1 className="text-light fw-bold fs1 px-5 pt-3">
                        Why choose Moa{" "}
                    </h1>
                    <p
                        style={{ lineHeight: "40px" }}
                        className="text-light pt-3 px-5"
                    >
                        We provide iGaming software that’s designed by people
                        who focus on sustainability and growth. Striving to
                        skyrocket your revenue streams, we make sure you get
                        noticed in the industry through our innovative products
                        and solutions. Among many other casino software
                        providers, our professionals are ready to deliver
                        premium quality services. Always looking at the big
                        picture, we created software that is easy to set up with
                        services designed for all types of businesses. Contact
                        us and we’ll reach out to you for anything your business
                        needs. MOA Gaming - your reliable partner in the iGaming
                        market. We’ve got you covered!
                    </p>
                </div>
            </Row>
        </section>
    );
};

export default WhyChooseMoa;
