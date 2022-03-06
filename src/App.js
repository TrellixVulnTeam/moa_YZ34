import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './Events';
import AboutUs from './AboutUs';
import CassinoAndBetting from './CassinoAndBetting';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/events' element={<Events />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/casino-and-betting' element={<CassinoAndBetting />} />
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
