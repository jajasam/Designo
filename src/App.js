import './styles/App.scss';

import Header from './components/Header'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'


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
        {/* <Home device={device} /> */}
        <About device={device} />
      </main>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
