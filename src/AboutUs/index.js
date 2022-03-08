import './style.css';
import rightArrow from './assets/right.svg';
import explore from './assets/explore.svg';
import grow from './assets/grow.svg';
import improve from './assets/improve.svg';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const whoWeAreWrapper = useRef();
  const whoWeAreHeading = useRef();
  const whoWeArePara1 = useRef();
  const whoWeArePara2 = useRef();
  const whoWeArePara3 = useRef();
  const whoWeAreButton1 = useRef();
  const whoWeAreButton2 = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: whoWeAreWrapper.current,
          start: 'top 75%',
          end: 'top top',
          markers: true,
          scrub: 1,
        },
      })
      .from(whoWeAreHeading.current, {
        y: 100,
      })
      .from(whoWeArePara1.current, {
        y: 200,
      })
      .from(whoWeArePara2.current, {
        y: 200,
      })
      .from(whoWeArePara3.current, {
        y: 200,
      })
      .from(whoWeAreButton1.current, {
        y: 200,
      })
      .from(whoWeAreButton2.current, {
        y: 200,
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className='about-us-top-wrapper'>
        <div className='about-us-header'>
          <h2>Where iGaming</h2>
          <h1>Magic Happens</h1>
          <p>
            MOA Gaming is your number one trusted partner in the Gaming and
            Betting industry. With a long history of successful business
            collaborations, MOA gaming is determined to continue delivering
            high-quality services and products to all gaming operators.
          </p>
          <button>
            <a href='/'>
              <span>Contact Us</span>
              <img src={rightArrow} className='about-us-right-btn-icon' />
              <img />
            </a>
          </button>
        </div>

        <div className='about-us-who-we-are-wrapper' ref={whoWeAreWrapper}>
          <h1 ref={whoWeAreHeading}>Who We Are</h1>
          <p ref={whoWeArePara1}>
            It all started 18 years ago when a group of technology geeks came up
            with the idea of MOA gaming. With our main development office based
            in Armenia, our international company has managed to come a long
            way.
          </p>
          <p ref={whoWeArePara2}>
            Our passion for innovation and the immense interest in a safe gaming
            experience have always been the two main driving forces of our
            company.
          </p>
          <p ref={whoWeArePara3}>
            Today MOA gaming is one of the leading voices in the online gaming
            industry, offering services to operators from all over the world.
            Our products include{' '}
            <strong>
              Sports Betting, Gaming Suite, Affiliate and Agent Platform,
              Payment Solution, Notification App
            </strong>
            , and a list of services, including{' '}
            <strong>
              Online Gaming License, Customer Support, Marketing Service, Design
              Service, Risk Management, Sports Sponsorship.
            </strong>
          </p>
          <div className='about-us-who-we-are-boxes-wrapper'>
            <div ref={whoWeAreButton1} className='about-us-who-we-are-box'>
              <h6>15 +</h6>
              <p>Customizable Services and Solutions</p>
            </div>
            <div ref={whoWeAreButton2} className='about-us-who-we-are-box'>
              <h6>30 +</h6>
              <p>Trusted Partners</p>
            </div>
          </div>
        </div>

        <div className='about-us-our-mission-wrapper'>
          <h1>Our Mission</h1>
          <p>
            MOA Gaming presents a range of world-class solutions to launch your
            online iGaming business.
          </p>
          <div className='about-us-our-mission-boxes-wrapper'>
            <div className='about-us-our-mission-box'>
              <img src={explore} />
              <div className='about-us-our-mission-box-text-wrapper'>
                <h6>Explore</h6>
                <p>
                  At MOA Gaming, we are dedicated to providing innovative and
                  customizable products, services, and solutions to all our
                  clients.
                </p>
              </div>
            </div>

            <div className='about-us-our-mission-box'>
              <img src={improve} />
              <div className='about-us-our-mission-box-text-wrapper'>
                <h6>Improve</h6>
                <p>
                  MOA Gaming is at the forefront of the fast development in the
                  betting and gaming world, so all our solutions and software
                  can be adapted and customized to your business and target
                  market.
                </p>
              </div>
            </div>

            <div className='about-us-our-mission-box'>
              <img src={grow} />
              <div className='about-us-our-mission-box-text-wrapper'>
                <h6>Grow</h6>
                <p>
                  Receive and make payments with the payment method of your
                  preference from any country around the world whenever you need
                  to.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='about-us-vision-wrapper'>
          <div className='about-us-img-bg'>
            <h1>Our Vision</h1>
            <p>
              iGaming industry Together With You, We Can Make a Difference in
              the.
            </p>
            <button>
              <a href='/'>
                Contact us <img src={rightArrow} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='about-us-footer-wrapper'>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
