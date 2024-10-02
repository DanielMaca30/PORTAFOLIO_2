import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Works = () => {
  return (
    <section id="works">
      <h2>My Works</h2>
      <Carousel>
        <div>
          <img src="[link a la imagen de un trabajo]" alt="Work 1" />
          <p className="legend">Work 1 Description</p>
        </div>
        <div>
          <img src="[link a la imagen de otro trabajo]" alt="Work 2" />
          <p className="legend">Work 2 Description</p>
        </div>
        {/* Agrega más trabajos */}
      </Carousel>
    </section>
  );
};

export default Works;
