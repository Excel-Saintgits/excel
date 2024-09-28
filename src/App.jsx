import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import AboutPage from './pages/About';
import Events from './pages/Events'; // Correct import for the Events page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<Events />} /> {/* Update the route to use Events */}
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
