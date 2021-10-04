import React from 'react';
import './Banner.css'
import banner from '../../image/undraw_data_processing_yrrv.svg'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-container">
            <Container>
                <div className="banner">
                    <Row className="align-items-md-center banner-content">
                        <Col md={7}>
                            <h1 className="mb-4 fw-bold display-5" style={{ color: "#6c63ff" }}>The latest digital skills, within reach.</h1>
                            <p className="fs-5 text-white py-3">Discover the fastest, most effective way to gain job-ready expertise for the careers of the future.</p>
                            <NavLink to="/about" className="custom-button">About Us</NavLink>
                        </Col>
                        <Col md={5}>
                            <img src={banner} alt="" width="450" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Banner;