import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container pb-2">
            {/* contact section */}
            <h1 className="text-center py-2 mt-5 header-title pb-4">Contact</h1>
            <div className="w-50 mx-auto mb-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <NavLink to="/home" className="course-button text-white">Submit</NavLink>
                </Form>
            </div>
        </div>
    );
};

export default Contact;