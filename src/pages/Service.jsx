import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


import ServiceBanner from '../components/ServiceBanner'
import WebsiteExample from '../components/WebsiteExample'
import ServiceOverview from '../components/ServiceOverview'

import data from '../assets/data.json'

function Service ({ device }) {
    const params = useParams().serviceName;
    const serviceData = data.services.filter(service => service.slug === params)

    const websitesElems = serviceData[0]?.websites.map(({name, description}, i)=> <WebsiteExample name={name} description={description} key={i} />)

    const servicesElem = data.services.map(({slug, name, img},i) => slug !== params ? 
    <ServiceOverview 
        slug={slug}
        serviceName={name} 
        img={`${img}${name === 'Web Design' ? '-small' : ''}`} 
        key={i}
        device={device}
        /> : ''
    )

    return (
        <div>
            <ServiceBanner
                title={serviceData[0].name}
                description={serviceData[0].description}
            />
            {
                websitesElems && websitesElems
            }
            <div className="container">
                {
                    servicesElem && servicesElem
                }
            </div>
        </div>
    )
}

export default Service
