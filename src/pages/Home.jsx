import { Link } from 'react-router-dom'

import ServiceOverview from '../components/ServiceOverview'
import Quality from '../components/Quality'
import PreFooter from '../components/PreFooter'
import LeafBgPattern from '../components/LeafBgPattern'

import data from "../assets/data.json"

import '../styles/Home.scss'

function Home({ device }) {
const qualitiesElem = data.qualities.map(({name, description},i) => <Quality 
        qualityName={name} 
        description={description} 
        key={i} 
        i={i} />
)

const servicesElem = data.services.map(({slug, name, img},i) => <ServiceOverview 
  slug={slug}
  serviceName={name} 
  img={img} 
  key={i}
  device={device} 
/>
)

  return (
    <div className="home">
      <LeafBgPattern 
        position="top"
        distanceTop={475}
      />
      <div className="hero">
        <div className="text">
          <h1>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </p>
          <Link to="/about" className="btn light-btn">Learn more</Link>
        </div>
        <img src={require('../assets/home/desktop/image-hero-phone.png')} alt="Phone" width="600px" height="800px" />
      </div>
      <div className="services container">
        {
          servicesElem && servicesElem
        }
      </div>
      <div className="qualities container">
        {
          qualitiesElem && qualitiesElem
        }
      </div>
      <LeafBgPattern 
        position="bottom"
        distanceTop={1879}
      />
      <PreFooter />
    </div>
  )
}

export default Home