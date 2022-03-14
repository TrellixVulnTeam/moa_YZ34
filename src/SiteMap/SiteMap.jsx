import NavBar from "../NavBar";
import { Row, Col } from "react-bootstrap";
import "./SiteMap.css";
import Services from "./assets/services.png";
import ContactUs from "./assets/contact-us.png";
import Solutions from "./assets/solutions.png";
import Products from "./assets/products.png";
export default function SiteMap() {
    return (
        <>
            <NavBar />
            <div className="sitemap-wrapper">
                <div className='site-map-wrapper-inner'>
                    <div className="site-map-main-heading">
                        <h1>Site Map</h1>
                    </div>
                    <div className='site-map-columns-container'>
                        <div className='site-map-col'>
                            <img src={Solutions} alt="logo" />

                            <h3>Solutions</h3>
                            <a href="white-label-solution">
                                White Label solution{" "}
                            </a>
                            <a href="turnkey-solution">
                                Turnkey solutionout
                            </a>
                            <a href="api-solution">API</a>
                            <a href="retail-betting-solution">
                                Retail solution
                            </a>

                        </div>

                        <div className='site-map-col'>
                            <img src={Products} alt="logo" />

                            <h3>Products</h3>
                            <a href="sportsbettingsoftware">
                                Sport Betting
                            </a>
                            <a href="gaming-suite">Gaming Suite</a>
                            <a href="affilateandagentplatforms">
                                Affilate Platform
                            </a>
                            <a href="payment-solution">Payment Solution</a>
                            <a href="">Live Score App</a>
                            <a href="notification-app">Notification App</a>

                        </div>

                        <div className='site-map-col'>
                            <img src={Services} alt="logo" />


                            <h3>Services</h3>
                            <a href="onilne-gaming">
                                Online Gaming License
                            </a>
                            <a href="247-customer-support">
                                Customer Support
                            </a>
                            <a href="marketing-services">
                                Marketing Service
                            </a>
                            <a href="design-services">Desing Service</a>
                            <a href="">Risk Management</a>
                            <a href="">Sports Sponsorship</a>

                        </div>
                        <div className='site-map-col'>
                            <img src={ContactUs} alt="logo" />

                            <h3>Contact us</h3>
                            <a href="about-us">About us</a>
                            <a href="">Blog</a>

                        </div>

                    </div>  </div>
            </div>
        </>
    );
}
