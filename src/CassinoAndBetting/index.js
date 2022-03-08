import './style.css';
import right from './assets/right.svg';
import playIcon from './assets/play-icon.svg';
import block1 from './assets/casino-block-1.svg';
import block2 from './assets/casino-block-2.svg';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CassinoAndBetting = () => {
  gsap.registerPlugin(ScrollTrigger);
  const pinnedWrapper = useRef();
  const pinnedImg = useRef();
  const pinnedText = useRef();

  const block1Wrapper = useRef();
  const block1Img = useRef();

  const block2Wrapper = useRef();
  const block2Img = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: pinnedWrapper.current,
          start: 'center center',
          end: '150% center',
          scrub: 1,
          pin: true,
        },
      })
      .to(pinnedImg.current, {
        scale: 0.8,
        borderRadius: 25,
        duration: '.5',
      })
      .from(
        pinnedText.current,
        {
          opacity: 0,
        },
        '-=.5'
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: block1Wrapper.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          markers: true,
        },
      })
      .from(block1Img.current, {
        y: 200,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: block2Wrapper.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          markers: true,
        },
      })
      .from(block2Img.current, {
        y: 200,
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className='casino-and-betting-wrapper'>
        <div className='casino-header-wrapper'>
          <h1>Casino & Betting</h1>
          <h6>Risk Management Services</h6>
          <p>
            MOA Gaming provides betting & casino risk management services to
            detect and manage fraudulent activity and risky players. Our
            services include real-time full analysis of live casino players’
            gaming patterns, 24/7 prevention of tactical and high-risk players,
            a flexible limiting system for both casino and sports betting,
            risk-free cooperations with live-casino providers, and much more.{' '}
          </p>
          <div className='casino-header-buttons-container'>
            <button className='casino-header-contact-btn'>
              <a href='/'>
                <span>Contact Us</span>
                <img src={right} />
              </a>
            </button>
            <button className='casino-header-video-btn'>
              <a>
                <span>Watch the video</span>
                <img src={playIcon} />
              </a>
            </button>
          </div>
        </div>

        <div className='casino-img-block' ref={pinnedWrapper}>
          <div className='casino-white-bg' />
          <div className='casino-img' ref={pinnedImg} />
          <div className='casino-img-text' ref={pinnedText}>
            <p>
              MOA Gaming’s risk management team constantly monitors all
              multi-accounts, flow rates, and players with risky behavior. We
              work hard to assess & control all potential threats and take the
              security of our users to a higher level. MOA Gaming also offers a
              reporting automation system allowing partners to access overall
              information fast.
            </p>
            <p>
              We move forward with a clear mindset to make sure that our players
              are assigned in certain categories according to the existing
              algorithm. Our risk management department improves the gaming
              experience of sports betting and live casino games, AML (Anti
              Money Laundering), SFM (Suspicious Fixed Matches), and KYC (Know
              Your Customer).
            </p>
          </div>
        </div>

        <div className='casino-block-wrapper'>
          <h3>MOA Gaming Risk Management Service Advantages </h3>
          <div className='casino-block-inner-wrapper' ref={block1Wrapper}>
            <img className='casino-block-img' src={block1} ref={block1Img} />
            <div className='casino-block-text'>
              <ul>
                <li>Real-time financial analysis </li>
                <li>Real-time Live Casino & Sports</li>
                <li>actical play prevention </li>
                <li>KYC and AML/ATF procedures </li>
                <li>Robust reporting system </li>
                <li>Real-time response </li>
                <li>High-quality support and training </li>
                <li>Highly flexible cooperations </li>
                <li>A powerful segmentation </li>
                <li>Payment system verification </li>
                <li>Data analysis of your players’ entire lifecycle </li>
                <li>Complete analysis of payment system transactions </li>
                <li>
                  Convenient and user-friendly interface • Player filters,
                  groups, categories
                </li>
                <li>Manual and automated </li>
                solutions
              </ul>
            </div>
          </div>
        </div>

        <div className='casino-block-wrapper'>
          <h3>Sports Betting Fraud Prevention </h3>
          <div className='casino-block-inner-wrapper' ref={block2Wrapper}>
            <div className='casino-block-text'>
              <p>
                MOA Gaming Risk Management Services are put together for sports
                betting fraud management and financial loss prevention. It
                ensures comprehensive and high-level risk management at every
                stage of the player’s journey, from registration to becoming a
                loyal user. With us, you’re guaranteed to be free from
                fraudulent and tactical players. MOA Gaming Risk Management
                Services cover dozens of leagues all over the world and check
                all the bets on all markets in real time to ensure the most
                secure and risk-free player base.
              </p>
            </div>
            <img className='casino-block-img' src={block2} ref={block2Img} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CassinoAndBetting;
