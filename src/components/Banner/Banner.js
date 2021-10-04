import React from 'react';
import './Banner.css'
import banner from '../../image/undraw_data_processing_yrrv.svg'
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className="banner">
            <Row className=" align-items-md-center banner-content">
                <Col>
                    <h1 className="mb-4 fw-bold" style={{ color: "#6c63ff" }}>The latest digital skills, within reach.</h1>
                    <p className="fs-5">Discover the fastest, most effective way to gain job-ready expertise for the careers of the future.</p>
                    <button className="btn btn-info text-white fw-bold px-4">About Us</button>
                </Col>
                <Col>
                    <img src={banner} alt="" width="450" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;