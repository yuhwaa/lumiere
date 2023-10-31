import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

type CarouselComponentProps = {
  data: {
    image: string;
    caption: string;
    description: string;
  }[];
};
/* The [] denotes an array. In the context of TypeScript type definitions, it's specifying that the data property should be an array of objects with the structure defined within the curly braces. */

export function CarouselComponent({data} : CarouselComponentProps) {
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

