import CategorieOverview from '../components/CategoryOverview'
import Quality from '../components/Quality'

import '../styles/Home.scss'

function Home() {
const webDesignImgSize = window.innerWidth > 1111 ? '-large': '';

  return (
    <div className="home">
      <div className="hero">
        <div className="text">
          <h1>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </p>
          <button className="light-btn">Learn more</button>
        </div>
        <img src={require('../assets/home/desktop/image-hero-phone.png')} alt="Phone" width="600px" height="800px" />
      </div>
      <div className="categories container">
        <CategorieOverview 
          categoryName='Web Design' 
          img={`web-design${webDesignImgSize}`}
        />
        <CategorieOverview 
          categoryName='App Design'
          img="app-design"
        />
        <CategorieOverview 
          categoryName='Graphic Design'
          img="graphic-design"
        />
      </div>
      <div className="qualities container">
        <Quality 
          qualityName="passionate"
          description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />
        <Quality 
          qualityName="resourceful"
          description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
        />
        <Quality 
          qualityName="friendly"
          description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
      </div>
    </div>
  )
}

export default Home