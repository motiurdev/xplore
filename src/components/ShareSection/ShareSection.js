import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import shareImg from '../../image/sharesection.jpg'

const ShareSection = () => {
    return (
        <Container className="py-5 mt-5">
            {/* share section */}
            <Row className="align-items-md-center">
                <Col>
                    <img src={shareImg} alt="" />
                </Col>
                <Col>
                    <h1 className="py-2 mt-4 header-title">Share knowladge</h1>
                    <p className="fs-5 text-muted">Real-world experts like you make a global impact by teaching on Udemy. We believe everyone has something to offer. Share your unique skills and experiences with students around the world by teaching a free or paid course.</p>
                    <NavLink to="/contact" className="text-white course-button">Join the community</NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default ShareSection;