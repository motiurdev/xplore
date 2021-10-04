import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-white py-4 footer">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-5 pe-5">
                        <h4 className="mb-4">Xplore</h4>
                        <p className="w-75">At Skillshare, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives.</p>
                    </div>
                    <div className="col-4">
                        <h4 className="mb-4">Contact</h4>
                        <p><i className="fas fa-location-arrow"></i> 928 Beechwood Ave.
                            Bronx, NY 10467</p>
                        <p><i className="fas fa-phone-alt"></i> Phone: (555) 555-1234</p>
                        <p><i className="far fa-envelope"></i> Email: info@xplore.com</p>
                    </div>
                    <div className="col-3">
                        <h4 className="mb-4">Follow</h4>
                        <ul className="social-link">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/">
                                    <i className="fab fa-linkedin-in fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;