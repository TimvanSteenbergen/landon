import React, {useState, useEffect} from 'react';

const HotelInfo = () => {
    const [accessibilitiesData, setAccessibilityData]= useState([]);
    const [servicesData, setServicesData]= useState([]);

    const loadAccessibilitiesData = async () => {
        const resp = await fetch('https://mxkrp9o184.execute-api.eu-west-1.amazonaws.com/Production/accessibilities')
        let accessibilityJson = await resp.json();

        setAccessibilityData(accessibilityJson);
    }

    const loadServicesData = async () => {
        const resp = await fetch('https://mxkrp9o184.execute-api.eu-west-1.amazonaws.com/Production/services')
        let servicesJson = await resp.json();

        setServicesData(servicesJson);
    }

    useEffect(()=>{
        loadAccessibilitiesData();
        loadServicesData();
    },[]);

    return (
        <div className="scene" id="hotelinfo">
            <article className="heading">
                <h1>Essential Info</h1>
            </article>
            <article id="usefulinfo">
                <section id="arrivalinfo">
                    <h2>Arrival Information</h2>
                    <ul>
                    {
                            accessibilitiesData.map((serve) => 
                            <li>{serve.name}</li>)
                        }
                    </ul>
                </section>
                <section className="checklist" id="services">
                    <h2>Services and Amenities</h2>
                    <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
                    <ul>
                        {
                            servicesData.map((serve) => 
                            <li>{serve.name}</li>)
                        }
                    </ul>
                </section>
                <section className="checklist" id="accessibility">
                    <h2>Accessibility</h2>
                    <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
                    <ul>
                        <li>Grab bars on tub walls</li>
                        <li>Shower chairs</li>
                        <li>Hand held shower sprayers</li>
                        <li>Higher toilets &amp; toilet modifiers</li>
                        <li>Lower sink faucet handles</li>
                        <li>Wheelchair clearance under sinks &amp; vanity</li>
                        <li>Lower racks in closet</li>
                        <li>TDD machines</li>
                        <li>Telephone light signalers  &amp; smoke alarms</li>
                        <li>Telephone amplification handsets</li>
                        <li>Closed captioned television converters</li>
                        <li>Vibrating alarm clocks</li>
                        <li>Telephones with volume control</li>
                    </ul>
                </section>
            </article>
            <article id="greenprogram">
                <h2>Landon Green Program</h2>
                <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
            </article>
        </div>
    );
}

export default HotelInfo;