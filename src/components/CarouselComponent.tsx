import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
  image: string;
  caption: string;
  description: string;
}

interface CarouselComponentProps {
  data: Slide[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ data }) => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number, e: object | null) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
