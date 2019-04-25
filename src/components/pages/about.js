import React, { Component } from 'react';
import uno from './img/uno.jpg';
import dos from './img/dos.jpg';
import tres from './img/tres.jpg';


class About extends Component {
    render() {
        return (
            <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ uno } className="d-block w-100" alt="Imagen Uno" />
                    </div>
                    <div className="carousel-item">
                        <img src={ dos } className="d-block w-100" alt="Imagen Dos" />
                    </div>
                    <div className="carousel-item">
                        <img src={ tres } className="d-block w-100" alt="Imagen Tres" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container mt-5">
                <h2>About Page</h2>
            </div>
            </div>
        );
    }
}

export default About;