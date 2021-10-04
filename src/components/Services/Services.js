import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="bg-light pb-4">
            <div className="container py-4">
                <h1 className="text-center py-2 mt-4 header-title pb-4">Our Courses</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4 py-4">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;