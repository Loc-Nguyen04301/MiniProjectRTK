import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";
import ProductService from "@/service/ProductService";
import Slider from "react-slick";
let cx = classNames.bind(styles);

const RelatedProducts = ({ currentProduct }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const category = currentProduct.category;
  const [relatedProducts, setRelatedProducts] = useState();

  useEffect(() => {
    const fetchingData = async () => {
      const res = await ProductService.getByCategory(category);

      setRelatedProducts(res.data.products);
    };
    fetchingData();
  }, [category]);

  return (
    <div className={cx("related-product-wrapper")}>
      <h3>SẢN PHẨM TƯƠNG TỰ</h3>
      <Slider {...settings}>
        {relatedProducts?.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img src={item.img} alt="abc" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
