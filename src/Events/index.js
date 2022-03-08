import './style.css';
import arrowDown from './assets/down.svg';
import eventCard1 from './assets/event-card-1.png';
import eventCard2 from './assets/event-card-2.png';
import eventCard3 from './assets/event-card-3.png';
import EventCard from './EventCard';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import NavBar from '../NavBar';
import Footer from '../Footer';

const eventsList = [
  {
    id: 1,
    name: 'Sport Event',
    location: 'Dubai, UAE',
    date: '21 Mar - 24 Mar 2022',
    image: eventCard1,
  },
  {
    id: 2,
    name: 'Inovation Expo',
    location: 'UK, London',
    date: '21 Mar - 24 Mar 2022',
    image: eventCard2,
  },
  {
    id: 3,
    name: 'Sport Event',
    location: 'Dubai, UAE',
    date: '21 Mar - 24 Mar 2022',
    image: eventCard3,
  },
];

const Events = () => {
  const headerRef = useRef();
  let revealCardsTimeline;

  useEffect(() => {
    revealCardsTimeline = gsap
      .timeline({ paused: true })
      .to(headerRef.current, { opacity: 0, duration: 1.5 })
      .to('.events-cards-container', { top: 0, duration: 1.5 }, '-=1.2')
      .to('#event-card-1', { x: 0, duration: 1 }, '-=1.2')
      .to('#event-card-2', { x: 0, duration: 1 }, '-=.9')
      .to('#event-card-3', { x: 0, duration: 1 }, '-=.9');
  }, []);

  const revealCards = () => {
    revealCardsTimeline.play();
  };

  return (
    <>
      <NavBar />
      <div className='events-container'>
        <div className='events-header-container' ref={headerRef}>
          <h1>Events</h1>
          <h6>
            Meet the MOA team at the most anticipated iGaming events all around
            the world. Interested? Check out the list of our upcoming events to
            book a meeting.
          </h6>
          <button className='down' onClick={revealCards}>
            <img src={arrowDown} />
          </button>
        </div>
        <div className='events-cards-container'>
          <div className='events-cards-container-inner'>
            {' '}
            {eventsList.map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
          </div>
        </div>
      </div>
      <div className='events-footer-container'>
        <Footer />
      </div>
    </>
  );
};

export default Events;
