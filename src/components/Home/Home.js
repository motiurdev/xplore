import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import ShareSection from '../ShareSection/ShareSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <ShareSection></ShareSection>
        </div>
    );
};

export default Home;