import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  AffilateAgentPlatforms,
  GamingSuite,
  Product,
  SportsBettingSoftware,
  PaymentSolution,
  WhiteLabelSolution,
  NotificationApp,
  TurnkeySolution,
  APISolution,
  RetailBettingSolution,
  WorldClassSolutions,
  OnlineGaming,
  CustomerSupport,
  Article,
  SearchResult,
  GamingServices,
  MarketingServices,
  DesignServices,
  GamingSports,
  GlobalBankingSolution,
  MoaGaming,
  AboutUs,
  CasinoBetting,
  UpcomingEvent,
  InovationExpo,
  EventsPage,
  EventAndExpo,
  AllEventAndExpo,
  SiteMap,
  AboutUs2,
  CasinoAndBetting2,
  Events2,
} from './Pages/index';
import NavBar from './Components/NavBar';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { Container } from 'react-bootstrap';

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='affilateandagentplatforms'
        element={<AffilateAgentPlatforms />}
      />
      <Route path='sportsbettingsoftware' element={<SportsBettingSoftware />} />
      <Route path='payment-solution' element={<PaymentSolution />} />
      <Route path='gaming-suite' element={<GamingSuite />} />
      <Route path='products' element={<Product />} />
      <Route path='notification-app' element={<NotificationApp />} />
      <Route path='white-label-solution' element={<WhiteLabelSolution />} />
      <Route path='turnkey-solution' element={<TurnkeySolution />} />
      <Route path='api-solution' element={<APISolution />} />
      <Route
        path='retail-betting-solution'
        element={<RetailBettingSolution />}
      />
      <Route path='world-class-solutions' element={<WorldClassSolutions />} />
      <Route path='onilne-gaming' element={<OnlineGaming />} />
      <Route path='247-customer-support' element={<CustomerSupport />} />
      <Route path='/blog/:slug' element={<Article />} />

      <Route path='search-result' element={<SearchResult />} />

      <Route path='gaming-services' element={<GamingServices />} />
      <Route path='marketing-services' element={<MarketingServices />} />
      <Route path='design-services' element={<DesignServices />} />
      <Route path='gaming-sports' element={<GamingSports />} />
      <Route
        path='global-banking-solution'
        element={<GlobalBankingSolution />}
      />
      <Route path='contact-us' element={<MoaGaming />} />
      <Route path='about-us' element={<AboutUs2 />} />
      <Route path='casino-and-betting' element={<CasinoAndBetting2 />} />
      <Route path='upcoming-event' element={<UpcomingEvent />} />
      <Route path='inovatio-expo' element={<InovationExpo />} />
      <Route path='events' element={<Events2 />} />
      <Route path='event-expo' element={<EventAndExpo />} />
      <Route path='all-event-expo' element={<AllEventAndExpo />} />
      <Route path='site-map' element={<SiteMap />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
