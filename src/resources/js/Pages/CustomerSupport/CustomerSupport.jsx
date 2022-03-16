import "./CustomerSupport.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import ColorsLifestyle from "./../../assets/img/colors_lifestyle.png";
import TextCardImg from "../../Components/Cards/TextCardImg";
import TextHeader from "../../Components/Headers/TextHeader";
import OneB from "./../../assets/img/1B.png";
import TwoB from "./../../assets/img/2B.png";
import ThreeB from "./../../assets/img/3B.png";
import FourB from "./../../assets/img/4B.png";
import HeadingAndText from "../../Components/Cards/HeadingAndText";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

import right from "../../assets/img/right.svg"
import ActionButton from '../../Components/Resources/ActionButton';

export default function CustomerSupport() {
    return (
        <div className='cs-wrapper'>
            <NavBar />
            <div className='ds-header-wrapper'>
                <h1>24/7 Customer  </h1>
                <h6>Support</h6>
                <p>
                    Launch your fully-functioning online casino business from scratch or grow your existing gambling business with MOA Gaming trustworthy solutions and tools.   </p>
                <div className='casino-header-buttons-container'>
                    <button className='casino-header-contact-btn'>
                        <a href='/contact-us'>
                            <span>Contact Us</span>
                            <img src={right} />
                        </a>
                    </button>
                    <ActionButton video="true" videoId="Nh3_jt7UXxw" text="Watch the video" variant="transparent" href="#" className="px-5 text-dark" iconClass="bi bi-play-circle ps-2" />
                </div>
            </div>

            <div className='cs-img-wrapper'>
                <div className='ds-grey-bg' />
                <div className='cs-img-container'>
                   <div className='cs-img'></div>
                    <div className='cs-img-text-wrapper'>
                        <h1>
                            How We Deliver Great Customer Support Service
                        </h1>
                        <div>
                            <p>
                                MOA Gaming provides excellent 24/7 customer support with services provided by the experts of the market. We offer an individual approach fitting your specific business needs.
                            </p><p>
                                We can deliver customer support for different regions and in several languages: Korean, English, Spanish, French, Russian, Armenian. A team of qualified specialists is ready to assist your players 24/7 with any gambling-related question via a live chat service.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cs-mid-text'>
                <h1>
                    Support Team Duties
                </h1>
                <p>
                    By getting the MOA Gaming professional customer support package, you will get a team of qualified specialists who will manage the following aspects of your business:
                </p>
            </div>

            <div className='cs-card'>
                <div className='cs-card-heading-wrapper'>
                    <img src={OneB} />
                    <h2>Respond to Questions
                        and Requests</h2>
                </div>
                <p>
                    Our specialists will quickly and genuinely answer any queries and requests that your players can come up with via the 24/7 live chat.
                </p>
            </div>


            <div className='cs-card'>
                <div className='cs-card-heading-wrapper'>
                    <img src={TwoB} />
                    <h2>Handle Issues
                        and Errors </h2>
                </div>
                <p>
                    Professionals will handle all the issues, errors, and bugs related to your betting and gaming platform reported by your players.
                </p>
            </div>


            <div className='cs-card'>
                <div className='cs-card-heading-wrapper'>
                    <img src={ThreeB} />
                    <h2>Advise and Assist With Information</h2>
                </div>
                <p>
                    Professionals will handle all the issues, errors, and bugs related to your betting and gaming platform reported by your players.
                </p>
            </div>

            <div className='cs-card'>
                <div className='cs-card-heading-wrapper'>
                    <img src={FourB} />
                    <h2>Inform Users About
                        Your Latest Updates</h2>
                </div>
                <p>
                    We aim to provide players with all the information on the current promotions, bonuses, and special offers, and recommend new games on a regular basis.
                    When you have a betting and gaming business, it’s one of your primary duties to ensure quality customer service for your players. Firstly, this will help you to gain the trust of your players and encourage them to return to your platform whenever they need it. Secondly, the gambling business requires good customer support if you want your players to become permanent. Therefore, it’s essential to provide professional customer support for your customers for successful business development and ongoing revenue growth.   </p>
            </div>

            <Footer />

        </div>
        // <Container fluid>
        //     <NavBar />
        //     <Row>
        //         <Header
        //             head="24/7 Customer Support"
        //             text="Launch your fully-functioning online casino business from scratch or grow your existing gambling business with MOA Gaming trustworthy solutions and tools."
        //             headcolor="#000"
        //             textcolor="#000"
        //             bgcolor="#E6E6EF"
        //             watchBtnClass="text-dark"
        //             btnTitle="Contact Us"
        //             href="./contact-us"
        //             videoId="Nh3_jt7UXxw"
        //         />
        //         <div className="text-center">
        //             <div>
        //                 <img
        //                     className="designingimg"
        //                     src={ColorsLifestyle}
        //                     style={{
        //                         maxWidth: "90%",
        //                         position: "relative",
        //                         marginTop: "-10%",
        //                     }}
        //                     alt="logo"
        //                 />
        //             </div>
        //         </div>
        //         <HeadingAndText
        //             head="How We Deliver Great Customer Support Service"
        //             text="MOA Gaming provides excellent 24/7 customer support with services provided by the experts of the market. We offer an individual approach fitting your specific business needs. <br/><br/>We can deliver customer support for different regions and in several languages: Korean, English, Spanish, French, Russian, Armenian. A team of qualified specialists is ready to assist your players 24/7 with any gambling-related question via a live chat service.  "
        //         />
        //         <TextHeader
        //             height="200px"
        //             color="#000"
        //             head="Support Team Duties"
        //             text="By getting the MOA Gaming professional customer support package, you will get a team of qualified specialists who will manage the following aspects of your business:"
        //         />
        //         <div className="m-padding">
        //             <TextCardImg
        //                 img={OneB}
        //                 head="Malta Gambling License"
        //                 text="Malta is a part of the European Union, making it a desirable jurisdiction to obtain a gambling license. It can offer protection both for licensed operators and online players. Malta’s gaming license has a high reputation thanks to anti-money laundering standards and financial laws and regulations.  The Malta gaming license has a variety of advantages. However, to acquire this license, you need more patience. The process is a little bit complicated in terms of requirements such as submission of very detailed paperwork, physical attendance for the process of signing, etc. Besides, it takes more time and is a bit more expensive. Nevertheless, if you have an authoritative betting and gaming business, then it’s worth getting it. It’s hard to immediately decide which gaming license is better for your business. Every business is different when it comes to its services and products. By choosing MOA Gaming’s license service, our professional consultants will give you the best advice perfect for your business."
        //                 headcolor="#2A324B"
        //                 align="left"
        //             />
        //             <TextCardImg
        //                 img={TwoB}
        //                 head="Malta Gambling License"
        //                 text="Malta is a part of the European Union, making it a desirable jurisdiction to obtain a gambling license. It can offer protection both for licensed operators and online players. Malta’s gaming license has a high reputation thanks to anti-money laundering standards and financial laws and regulations.  The Malta gaming license has a variety of advantages. However, to acquire this license, you need more patience. The process is a little bit complicated in terms of requirements such as submission of very detailed paperwork, physical attendance for the process of signing, etc. Besides, it takes more time and is a bit more expensive. Nevertheless, if you have an authoritative betting and gaming business, then it’s worth getting it. It’s hard to immediately decide which gaming license is better for your business. Every business is different when it comes to its services and products. By choosing MOA Gaming’s license service, our professional consultants will give you the best advice perfect for your business."
        //                 headcolor="#2A324B"
        //                 align="left"
        //             />
        //             <TextCardImg
        //                 img={ThreeB}
        //                 head="Malta Gambling License"
        //                 text="Malta is a part of the European Union, making it a desirable jurisdiction to obtain a gambling license. It can offer protection both for licensed operators and online players. Malta’s gaming license has a high reputation thanks to anti-money laundering standards and financial laws and regulations.  The Malta gaming license has a variety of advantages. However, to acquire this license, you need more patience. The process is a little bit complicated in terms of requirements such as submission of very detailed paperwork, physical attendance for the process of signing, etc. Besides, it takes more time and is a bit more expensive. Nevertheless, if you have an authoritative betting and gaming business, then it’s worth getting it. It’s hard to immediately decide which gaming license is better for your business. Every business is different when it comes to its services and products. By choosing MOA Gaming’s license service, our professional consultants will give you the best advice perfect for your business."
        //                 headcolor="#2A324B"
        //                 align="left"
        //             />
        //             <TextCardImg
        //                 img={FourB}
        //                 head="Malta Gambling License"
        //                 text="Malta is a part of the European Union, making it a desirable jurisdiction to obtain a gambling license. It can offer protection both for licensed operators and online players. Malta’s gaming license has a high reputation thanks to anti-money laundering standards and financial laws and regulations.  The Malta gaming license has a variety of advantages. However, to acquire this license, you need more patience. The process is a little bit complicated in terms of requirements such as submission of very detailed paperwork, physical attendance for the process of signing, etc. Besides, it takes more time and is a bit more expensive. Nevertheless, if you have an authoritative betting and gaming business, then it’s worth getting it. It’s hard to immediately decide which gaming license is better for your business. Every business is different when it comes to its services and products. By choosing MOA Gaming’s license service, our professional consultants will give you the best advice perfect for your business."
        //                 headcolor="#2A324B"
        //                 align="left"
        //             />
        //         </div>
        //         <Footer />
        //     </Row>
        // </Container>
    );
}
