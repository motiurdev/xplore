import React from 'react';

const HomeService = (props) => {
    const { title, image, author, rating, review, price } = props.homeservice;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="text-muted"><small>By {author}</small></p>
                    <p className="text-muted"> <span style={{ color: "#b4690e" }} className="fw-bold">{rating}</span> ({review})</p>
                    <h5>Price: ${price}</h5>
                    <button className="btn btn-info text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeService;