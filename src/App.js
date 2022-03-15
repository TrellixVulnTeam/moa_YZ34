import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './Events2';
import AboutUs from './AboutUs2';
import CassinoAndBetting from './CassinoAndBetting2';
import SiteMap from './SiteMap/SiteMap';
import GlobalBankingSolution from './GlobalBankingSolution';
import NotificationApp from './NotificationApp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/events' element={<Events />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/casino-and-betting' element={<CassinoAndBetting />} />
          <Route path='/site-map' element={<SiteMap />} />
          <Route path='/banking' element={<GlobalBankingSolution />} />
          <Route path='/notif' element={<NotificationApp />} />
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
