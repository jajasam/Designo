import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import '../styles/Service.scss'

import ServiceBanner from '../components/ServiceBanner'
import WebsiteExample from '../components/WebsiteExample'
import ServiceOverview from '../components/ServiceOverview'

import data from '../assets/data.json'

function Service ({ device }) {
    const params = useParams().serviceName;
    const serviceData = data.services.filter(service => service.slug === params)

    const websitesElems = serviceData[0]?.websites.map(({name, description, img}, i)=> 
    <WebsiteExample 
        slug={params}
        name={name} 
        description={description} 
        img={img}
        key={i} 
        />)

    const servicesElem = data.services.map(({slug, name, img},i) => slug !== params ? 
    <ServiceOverview 
        slug={slug}
        serviceName={name} 
        img={img} 
        key={i}
        device={device}
        /> : ''
    )

    return (
        <div className="service">
            <ServiceBanner
                slug={params}
                title={serviceData[0].name}
                description={serviceData[0].description}
            />
            <div className="container">
                <div className="websites">
                    {
                        websitesElems && websitesElems
                    }
                </div>
                <div className="services">
                    {
                        servicesElem && servicesElem
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
