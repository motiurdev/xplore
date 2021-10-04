import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([])

    useEffect(() => {
        fetch('/homeservice.json')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [])
    return (
        <div className="container py-4">
            <h1 className="text-center py-2">Our Service</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 py-4">
                {
                    homeServices.map(homeService => <HomeService homeservice={homeService}></HomeService>)
                }
            </div>
        </div>
    );
};

export default HomeServices;