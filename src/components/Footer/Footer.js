import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>Xplore</h4>
                        <p>At Skillshare, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives.</p>
                    </div>
                    <div className="col-4">
                        <h4>Contact</h4>
                        <p>928 Beechwood Ave.
                            Bronx, NY 10467</p>
                        <p>Phone: (555) 555-1234</p>
                        <p>Email: info@xplore.com</p>
                    </div>
                    <div className="col-4">
                        <h4>Follow</h4>
                        <ul className="social-link">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i class="fab fa-facebook-f fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i class="fab fa-linkedin-in fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i class="fab fa-instagram fa-2x"></i>
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