import { Routes, Route } from "react-router-dom";

import './styles/App.scss';

import Header from './components/Header'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Locations from './pages/Locations'
import Contact from './pages/Contact'


function App() {
  const screenSize = window.innerWidth;
    let device;
    if (screenSize < 768) {
        device = 'mobile'
    } else if (screenSize > 768 && screenSize < 1111) { 
        device = 'tablet'
    } else {
        device = 'desktop'
    }


  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" exact element={<Home device={device} />} />
            <Route path="/service/:serviceName" element={<Service device={device} />} />
            <Route path="/about" element={<About device={device} />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
      </main>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
