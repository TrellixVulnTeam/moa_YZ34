import "./PaymentSolution.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./../../Components/Headers/Header";
import Features from "../../Components/AffilateAgentPlatforms/Features";
import HandPhone from "./../../assets/img/hand-phone.png";
import ProductCard from "../../Components/Cards/ProductCard";
import Bank from "./../../assets/img/bank.png";
import Cards from "./../../assets/img/cards.png";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import ActionButton from '../../Components/Resources/ActionButton';
import right from '../../assets/img/right.svg'

const PaymentSolution = () => {
    return (
        <div className='ps-wrapper'>
            <NavBar />
            <div className='na-header-wrapper ps-header-wrapper'>
                <div className='na-header-text'>
                    <h2>Payment Solution </h2>
                    <p>Secure and reliable online payment methods are vital components of every online gaming & betting business. MOA Gaming offers you unique online payment solutions and guarantees the absolute trust of your players. We provide effective bank transfers and more than a hundred integrated payment methods.  </p>
                    <div className='na-btn-container'>
                        <button className='casino-header-contact-btn'>
                            <a href='/contact-us'>
                                <span>Contact Us</span>
                                <img src={right} />
                            </a>
                        </button>
                        <ActionButton video="true" videoId="TgEEFbUMtoY" text="Watch the video" variant="transparent" href="#" className="px-5 text-light" iconClass="bi bi-play-circle ps-2" />
                    </div>
                </div>
            </div>
            <div className='mobile-section-wrapper ps-mobile-section-wrapper'>
                <div className='mobile-section-text-wrapper ps-mobile-section-text-wrapper'>
                    <h2>
                        About <br />
                        Payment <br /> Solution
                    </h2>
                    <p>
                        Make your website accessible for brand-new players and bring an increased profit to your business with the affiliate network of your casino and betting business.
                    </p><p>
                        Our affiliate management software is developed to make it extra convenient for monitoring and calculating your revenues. We offer the most comprehensive affiliate platform, rebuilt with the newest technological enhancements. Increase your brand awareness and attract new players with our  innovative marketing tools, including the Banner Management Program and the JSON/XML feed.
                    </p><p>
                        Our Affiliate Software will let you have full control of all incoming cash streams, as well as automated and manual commission payout. Moreover, with MOA Gaming, you can launch your affiliate platform in the shortest period of time.
                    </p>
                </div>
            </div>
            <div className='mobile-hand-container ps-mobile-hand-contaner'>
                <img src={HandPhone} />
            </div>

            <div className='ps-payment-solutions'>
                <div className='ps-payment-solutions-header'>
                    <h2>Payment Solutions</h2>
                    <p>MOA Gaming presents you with unique online payment solutions and ensures the absolute trust of your players. With our payment gateway, you’ll have access to different payment methods in one solution across different regions of the world.</p>
                </div>
                <div className='ps-payment-solutions-images'>
                    <div className='ps-payment-solutions-card'>
                        <img src={Bank} />
                        <h2>Virtual Account  </h2>
                        <p>Meet Moa Gaming's virtual account service. Withdraw your balance to any account you want , 24 hours a day. It is possible to issue more than 20,000 virtual accounts without limiting the amount of withdrawal, and change the name of the account holder directly in the virtual account.</p>
                    </div>
                    <div className='ps-payment-solutions-card'>
                        <img src={Cards} />
                        <h2>Integrated Payment method</h2>
                        <p>Receive and make payments with the payment method of your preference from any country around the world whenever you need to.</p>
                    </div>
                </div>
            </div>

            <div className='na-features-wrapper'>
                <div className='na-features-top-row'>
                    <h1>Features</h1>
                    <p>A broad range of convenient features designed for comprehensive business management.</p>
                </div>

                <div className='na-features-bottom-row'>
                    <div className='na-features-col1'>
                        <div className='na-features-col1-row1'>
                            <h2 className='na-features-heading'>Multi-Chanel Solutions</h2>
                            <p className='na-features-p'>LSolutions are available on mobile, Android and iOS, desktop, and retail. </p>
                        </div>
                        <div className='na-features-col1-row2'>
                            <h2 className='na-features-heading'>Enhanced Tools</h2>
                            <p className='na-features-p'>With MOA Gaming, you can have the most advanced reporting and monitoring tools for the more stable operation of your business.  </p>
                        </div>
                    </div>

                    <div className='na-features-col2'>
                        <div className='na-features-col2-row1'>
                            <h2 className='na-features-heading'>Wide Range of Games</h2>
                            <p className='na-features-p'>LMOA Gaming offers 5000+ games for your players to guarantee a diverse iGaming experience. </p>
                        </div>
                        <div className='na-features-col2-row2'>
                            <h2 className='na-features-heading'>A Bonus System</h2>
                            <p className='na-features-p'>We provide a multi-language and multi-currency platform for the worldwide operation of your betting and gaming business.   </p>

                        </div>
                    </div>

                    <div className='na-features-col3'>
                        <div className='na-features-col3-row1'>
                            <h2 className='na-features-heading'>Flexible Platform</h2>
                            <p className='na-features-p'>We provide a multi-language and multi-currency platform for the worldwide operation of your betting and gaming business. </p>
                        </div>
                        <div className='na-features-col3-row2'>
                            <h2 className='na-features-heading'>Comprehensive Risk Management</h2>
                            <p className='na-features-p'>With the management of risks done well, your business has the biggest chances of reaching its goals. </p>
                        </div>
                    </div>
                </div>
            </div>





            <Footer />
        </div>

    );
};
export default PaymentSolution;
