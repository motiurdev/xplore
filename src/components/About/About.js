import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../image/about-us.png'
import brand1 from '../../image/Apple-logo-grey.png'
import brand2 from '../../image/eventbrite-logo-grey.png'
import brand3 from '../../image/Kaiser-logo-grey.png'
import brand4 from '../../image/Netflix_Logo_RGB.png'


const About = () => {
    return (
        <div>
            <Container>
                <Row className="align-items-md-center">
                    <Col>
                        <h1 className="fw-bold display-4 lh-sm header-title">
                            We share<br />
                            knowledge<br />
                            with the world</h1>
                    </Col>
                    <Col>
                        <img src={aboutImg} alt="" />
                    </Col>
                </Row>
            </Container>
            <div className="mt-5">
                <div className="text-center py-5 mt-5">
                    <h1 className="fw-bold py-3 header-title">Changing learning for the better</h1>
                    <p className="w-75 mx-auto fs-5 text-muted">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                </div>
            </div>
            <div className="py-5 mt-5">
                <Container>
                    <div className="d-flex justify-content-md-between">
                        <img src={brand1} alt="" />
                        <img src={brand2} alt="" />
                        <img src={brand3} alt="" />
                        <img src={brand4} width="200" alt="" />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;