import CategoryOverview from '../components/CategoryOverview'
import Quality from '../components/Quality'

import data from "../assets/data.json"

import '../styles/Home.scss'

function Home({ device }) {
const webDesignImgSize = window.innerWidth > 1111 ? '-large': '';
const qualitiesElem = data.qualities.map(({name, description},i) => <Quality 
        qualityName={name} 
        description={description} 
        key={i} 
        i={i} />)

const categoriesElem = data.categories.map(({name, img},i) => {
return <CategoryOverview 
        categoryName={`${name}`} 
        img={`${img}${name === 'Web Design' ? webDesignImgSize : ''}`} 
        key={i}
        device={device} />
})

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
        {
          categoriesElem && categoriesElem
        }
      </div>
      <div className="qualities container">
        {
          qualitiesElem && qualitiesElem
        }
      </div>
    </div>
  )
}

export default Home