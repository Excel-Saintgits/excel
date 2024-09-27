// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import AboutPage from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
