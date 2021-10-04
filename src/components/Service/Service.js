import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { title, image, author, rating, review, price } = props.service
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="text-muted"><small>By {author}</small></p>
                    <p className="text-muted"> <span style={{ color: "#b4690e" }} className="fw-bold">{rating}</span> <i class="fas fa-star" style={{ color: "#b4690e" }}></i> ({review})</p>
                    <h5 className="text-muted">${price}</h5>
                    <NavLink to="/services" className="text-white course-button">Buy Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;