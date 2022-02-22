import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import Pricing from './pages/Pricing';
import BookNow from './pages/BookNow';
import LocationsPage from './pages/LocationsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
