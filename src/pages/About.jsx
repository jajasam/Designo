import Cities from '../components/Cities'
import Text_Img from '../components/Text_Img'

import data from "../assets/data.json"


function About({ device }) {
    const citiesElem = <Cities cities={data.cities} />
    return (
        <div className="about container">
            {/* About us
  Founded in 2010, we are a creative agency that produces lasting results for our clients. 
  We've partnered with many startups, corporations, and nonprofits alike to craft designs 
  that make real impact. We're always looking forward to creating brands, products, and 
  digital experiences that connect with our clients' audiences. */}
            <div className="banner"></div>
            <Text_Img
                title="World-class talent"
                description={["We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.", "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission."]}
                img="real-deal"
                device={device}
            />
            {
                citiesElem && citiesElem
            }
            <Text_Img
                title="The real deal"
                description={["As strategic partners in our clients' businesses, we are ready to take on any challenge as our own.Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.", "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."]}
                img="world-class-talent"
                device={device}
            />
        </div>
    )
}

export default About
