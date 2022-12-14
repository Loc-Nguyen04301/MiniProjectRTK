import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const imagesBrandSlider = [
  <img
    src="https://www.thol.com.vn/media/magentothem/brandslider/thol-135.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/media/magentothem/brandslider/LABRADA.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/media/magentothem/brandslider/rsplogo.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/media/magentothem/brandslider/nutrex.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/pub/media/wysiwyg/brand/evogen_1.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/media/magentothem/brandslider/san.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/pub/media/wysiwyg/home/Untitled-1.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/pub/media/wysiwyg/home/sole-fitness.jpg"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://www.thol.com.vn/pub/media/wysiwyg/home/logo-spirit.png"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
];

const responsive = {
  0: { items: 7 },
};

const ManufacturerSlider = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={imagesBrandSlider}
      animationType={"slide"}
      responsive={responsive}
      disableDotsControls
    />
  );
};

export default ManufacturerSlider;
