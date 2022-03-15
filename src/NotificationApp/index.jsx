import "./notification-app.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NotificationHandPhone from "../notification-hand-phone.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import right from './assets/right.svg';
import playIcon from './assets/play-icon.svg'
import headerImg from './assets/notification-app-header-bg.png'

export default function NotificationApp() {

    return (
        <>
            <NavBar />
            <div className='na-header-wrapper'>
                <div className='na-header-text'>
                    <h2>NOTIFICATION APP </h2>
                    <p>MOA Gaming notification app allows your users to get notified about the latest updates in the most uncomplicated way. You can have immediate product updates, financial updates, updates on domain changes, bonuses, promo codes, events, and whatnot. </p>
                    <div className='na-btn-container'>
                        <button className='casino-header-contact-btn'>
                            <a href='/contact-us'>
                                <span>Contact Us</span>
                                <img src={right} />
                            </a>
                        </button>
                        <button className='casino-header-video-btn na-white-btn'>
                            <a>
                                <span>Watch the video</span>
                                <img src={playIcon} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mobile-section-wrapper'>
                <div className='mobile-section-text-wrapper'>
                    <h2>
                        About <br />
                        Notification <br /> App
                    </h2>
                    <p>
                        Want your users to get instantly
                        notified of the latest updates of your
                        platform? MOA Gaming presents a simple
                        solution for your users to unlock
                        essential pieces of information in the
                        form of notifications. Send simple
                        custom notifications to your users by
                        integrating the MOA Gaming notification
                        app with your platform. It has
                        comprehensive features such as custom
                        notifications, direct communication with
                        users, 24/7 customer support, fast and
                        easy integration, a user-friendly
                        interface, and reliable service.
                        <br />
                        <br />
                        MOA Gaming’s notification app is
                        designed with a mission to help your
                        users always be up to date with all the
                        news, domain changes, products,
                        financial information, remarkable
                        bonuses, and various promotions.
                    </p>
                </div>
            </div>
            <div className='mobile-hand-container'>
                <img src={NotificationHandPhone} />
            </div>

            <div className='na-features-wrapper'>
                <div className='na-features-top-row'>
                    <h1>Features</h1>
                    <p>A broad range of convenient features designed for comprehensive business management.</p>
                </div>

                <div className='na-features-bottom-row'>
                    <div className='na-features-col1'>
                        <div className='na-features-col1-row1'>
                            <h2 className='na-features-heading'>Advanced Communication</h2>
                            <p className='na-features-p'>MOA Gaming’s notification app grants you the opportunity to directly communicate with your users within the system. </p>
                        </div>
                        <div className='na-features-col1-row2'>
                            <h2 className='na-features-heading'>24/7 Support</h2>
                            <p className='na-features-p'>Get in Touch with any of our support team whenever you need it. </p>
                        </div>
                    </div>

                    <div className='na-features-col2'>
                        <div className='na-features-col2-row1'>
                            <h2 className='na-features-heading'>Instant Integration</h2>
                            <p className='na-features-p'>We guarantee easy and quick app integration to save you time and resources. </p>
                        </div>
                        <div className='na-features-col2-row2'>
                        </div>
                    </div>

                    <div className='na-features-col3'>
                        <div className='na-features-col3-row1'>
                            <h2 className='na-features-heading'>Availability</h2>
                            <p className='na-features-p'>You can install MOA Gaming’s unique notification app on both iOS and Android.</p>
                        </div>
                        <div className='na-features-col3-row2'>
                            <h2 className='na-features-heading'>User-friendly Interface</h2>
                            <p className='na-features-p'>The MOA Gaming notification app is convenient to use and easy on the eye thanks to its appealing user-friendly interface.</p>
                        </div>
                    </div>
                </div> </div>
            <Footer />

        </>
    );
}
