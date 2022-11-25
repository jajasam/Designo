import './styles/App.scss';

import Header from './components/Header'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

import Home from './pages/Home'


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
