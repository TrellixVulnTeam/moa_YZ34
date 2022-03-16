import { react, Component } from "react";
import "./design-services.style.css";
import BrandingImg from "../../assets/img/branding.png";
import OperatingYourBusiness from "../../assets/img/trading.png";
import MarketingMaterialsDesign from "../../assets/img/meeting.png";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import right from "../../assets/img/right.svg"
import ActionButton from '../../Components/Resources/ActionButton';

class DesignServices extends Component {
    render() {
        return (
            <div className='ds-wrapper' >
                <NavBar />
                <div className='ds-header-wrapper'>
                    <h1>Design Services</h1>
                    <h6>Online Casino and Betting</h6>
                    <p>
                        To attract new players and retain the existing loyal user base, you must create the right first impression via a strong online betting and gaming website design.
                    </p>
                    <div className='casino-header-buttons-container'>
                        <button className='casino-header-contact-btn'>
                            <a href='/contact-us'>
                                <span>Contact Us</span>
                                <img src={right} />
                            </a>
                        </button>
                        <ActionButton video="true" videoId="_BLcL_Dbeig" text="Watch the video" variant="transparent" href="#" className="px-5 text-dark" iconClass="bi bi-play-circle ps-2" />
                    </div>
                </div>
                <div className='ds-img-wrapper'>
                    <div className='ds-grey-bg' />
                    <div className='ds-img-wrapper-text'>
                        <p>
                            With MOA Gaming, you can provide your players with the best visual experience and turn first-time players into loyal ambassadors of your online iGaming business.
                        </p></div>
                </div>
                <div className='ds-row-wrapper'>
                    <div className='ds-row-text'>
                        <h2>Branding</h2>
                        <h6>An Essential Business Element </h6>
                        <p>Branding is what you need to highlight the uniqueness of your business and make your brand voice heard by your ideal customers. MOA Gaming’s branding services include designing the brand identity and logo of your betting and gaming business to create an engaging online presence. </p>
                    </div>
                    <div className='ds-row-img'>
                        <img src={BrandingImg} />
                    </div>
                </div>

                <div className='ds-row-wrapper'>
                    <div className='ds-row-img'>
                        <img src={OperatingYourBusiness} />
                    </div>   <div className='ds-row-text'>
                        <h2>Operating Your Business</h2>
                        <h6>A Guarantee For Growth </h6>
                        <p>MOA Gaming cares about the successful operation of your betting and gaming business across multiple platforms. Therefore we provide services such as illustration, designs for homepage banners, promo banners, etc. Thanks to the unique graphic designs of MOA’s skilled professionals, your website is guaranteed to have a long-lasting impact. </p>
                    </div>

                </div>

                <div className='ds-row-wrapper'>
                    <div className='ds-row-text'>
                        <h2>Marketing Materials Design</h2>
                        <h6>Selection of Vital Components</h6>
                        <p>Well-done marketing is the core of your brand’s immediate success, and design services play a significant role in it. We offer the following range of services: web design, designs for landing pages, ads, banners, and email marketing. </p>
                    </div>
                    <div className='ds-row-img'>
                        <img src={MarketingMaterialsDesign} />
                    </div>
                </div>

                <div className='ds-header-wrapper'>
                    <h6>What is an Online Casino and Betting Design Service?</h6>
                    <p>
                        MOA Gaming Design Service offers a great range of comprehensive services, including online betting and gaming website design, logo & branding, graphic design, graphic animations, and many other engaging visuals needed for the success of your website.   </p>
                    <p>At MOA Gaming, we believe that your  website is the face of your betting and gaming business. Therefore we commit to delivering a fully functioning and visually engaging website that will provide an enjoyable experience to your players. </p>

                </div>
                <div className='ds-card-wrapper'>
                    <div className='ds-grey-bg' />
                    <div className='ds-cards-wrapper'>
                        <div className='ds-card'>
                            <h3>
                                PWhat Makes a Great Online
                                Betting and Casino
                                Website Design?
                            </h3>
                            <p>
                                Great design must be a priority for any online gambling website, since it’s the first thing users notice when they visit your site. So if you want to attract users right away and keep them on your website, it must have the following features:
                            </p><p>
                                <li>
                                    Easy navigation
                                </li>
                                <li>
                                    Responsive design</li>
                                <li>
                                    Engaging visuals
                                </li>
                                <li>
                                    Branded color scheme
                                </li>
                                <li>
                                    Attractive buttons and vivid CTAs
                                </li>
                                <li>
                                    Eye-catching web banners
                                </li>
                                <li>
                                    Mobile friendliness
                                </li>

                            </p>
                        </div>

                        <div className='ds-card'>
                            <h3>
                                BHow Your Website Design
                                Affects Your Betting and
                                Gaming Business?
                            </h3>
                            <p>
                                Based on your target market and player base, the image and the design patterns of your online betting and gaming business website may vary. However, there are several fundamental design elements that are universally applicable for all online gambling websites, such as:
                            </p>
                            <p>
                                <li>
                                    Branded visuals (e.g. logo, fonts, colors)
                                </li>
                                <li>
                                    Attractive promo banners
                                </li>
                                <li>
                                    Vivid CTAs and highlighted buttons
                                </li>  </p>
                            <p>
                                Our creative designers will analyze your competitors’ strengths and weaknesses, upgrade your existing website or create a new one from scratch.

                            </p>
                        </div>
                    </div>

                </div>

                <div className='ds-bottom-row'>
                    <h1>
                        What is Included in the MOA Gaming Design Services Package?
                    </h1>
                    <p>
                        If you have questions regarding the design of your current online betting and gaming business, we offer a free consultation with our design team. Don’t hesitate to contact us and ask all the questions related to it. Keep in mind that all MOA design services are fully customizable.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DesignServices;
