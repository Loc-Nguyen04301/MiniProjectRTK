import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const imagesBrandSlider = [
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
    onDragStart={handleDragStart}
    alt=""
    role="presentation"
  />,
  <img
    src="https://cdn.shopify.com/s/files/1/1973/8173/files/logo_322a0bfd-1ab0-4d7a-bce0-429a76e80583.png?height=628&pad_color=fff&v=1635522939&width=1200"
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
      autoPlay
      infinite
      animationDuration="2000"
      disableDotsControls
      disableButtonsControls
      disableSlideInfo
    />
  );
};

export default ManufacturerSlider;
