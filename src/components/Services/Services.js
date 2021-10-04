import React, { useEffect, useState } from 'react';
import MoreService from '../MoreService/MoreService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services.map(service => <MoreService service={service}></MoreService>)
            }
        </div>
    );
};

export default Services;