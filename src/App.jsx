import LandingPage from './pages/LandingPage'; // Correct path to LandingPage
// import AboutPage from './pages/About'; // Correct path to AboutPage
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/footer';
const App = () => {
  return (
   <Router>
    <Nav/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        {/* <Route path="/about" element={<AboutPage/>} /> */}
     
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;