import './styles/App.scss';

import Header from './components/Header'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
