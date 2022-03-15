import "./GlobalBankingSolution.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Shild from "../shild.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import right from './assets/right.svg'
import playIcon from './assets/play-icon.svg'

export default function GlobalBankingSolution() {
    return (
        <>
            <NavBar />
            <div className='gbs-header-wrapper'>
                <div className='gbs-header-text'>
                    <h2>MOA Gaming Global Banking Solution </h2>
                    <p>MOA Gaming offers access to the most popular and major sports brands. With our sports sponsorship packages, your brand name will be presented worldwide on the most popular platforms. </p>
                    <div className='gbs-btn-container'>
                        <button className='casino-header-contact-btn'>
                            <a href='/contact-us'>
                                <span>Contact Us</span>
                                <img src={right} />
                            </a>
                        </button>
                        <button className='casino-header-video-btn gbs-white-btn'>
                            <a>
                                <span>Watch the video</span>
                                <img src={playIcon} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='gbs-text'>
                Your Funds are 100%<br></br>Secure With Us
            </div>
            <div className='gbs-cols-wrapper'>
                <div className='gbs-cols-text'>
                    <p>
                        MOA Gaming offers an exceptional global banking
                        solution for all businesses marked as high risk. The
                        mission of MOA Gaming’s Global Banking solution is
                        to help your business have better and stronger
                        security and slide over all risks and losses
                        smoothly.
                    </p>
                    <p>
                        To do this, we create a company for you in a safe
                        jurisdiction, along with its bank account, and give
                        you full control over it. Your funds are secure with
                        us, and you can access them from wherever you are.{" "}
                    </p>
                    <p>
                        Our highly experienced consultants will guide you
                        through the whole process and help you overcome any
                        risks and challenges that may arise.
                    </p>
                    <p>
                        As one of the leading names of the market, MOA
                        Gaming knows the ins and outs of it, so rest assured
                        that your funds are 100% safe with banking solution.
                    </p>
                </div>
                <div className='gbs-cols-img-wrapper'>
                    <img src={Shild} />
                    <button className='casino-header-video-btn gbs-white-btn-col'>
                            <a>
                                <span>Watch the video</span>
                                <img src={playIcon} />
                            </a>
                        </button>
                </div>

            </div>
            <div className='gbs-why-choose-wrapper'>
                <div>
                    <h2>Why Choose Moa</h2>
                    <p>If you have questions regarding the design of your current online betting and gaming business, we offer a free consultation with our design team. Don’t hesitate to contact us and ask all the questions related to it. Keep in mind that all MOA design services are fully customizable.</p>
                </div>   </div>
            <Footer />
        </>
    );
}
