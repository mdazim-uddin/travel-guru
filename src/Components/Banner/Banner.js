import React, { useState } from 'react';
import fakePlace from '../../fakePlace'
import { Col, Row } from 'react-bootstrap';
import banner from '../../Image/defaultBcg.jpeg';

import './Banner.css'
import Carusel from '../Carusel/Carusel';
import { useParams } from 'react-router-dom';
const Banner = () => {
const [cart,setCart]=useState(fakePlace);
const {BannerId}=useParams()

    return (
       <div style={{ backgroundImage: ` url(${banner})` }} className="banner">
          
            <Row>
                <Col md={4}>
                 <div className="banner-text">
                  <h1>{BannerId}</h1>
                 <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Aspernatur numquam 
                        architecto odio velit dignissimos accusamus,
                         recusandae beatae voluptas error culpa omnis
                        necessitatibus sequi pariatur est expedita
                 </p>
                    <button>Book Now</button>
                 </div>
                </Col>
                <Col md={8}>
                  <Row>
                       {
                        cart.map(place=> <Carusel place={place}></Carusel>)
                      }
                    </Row>     
                </Col>
            </Row>
        </div>
    );
};

export default Banner;