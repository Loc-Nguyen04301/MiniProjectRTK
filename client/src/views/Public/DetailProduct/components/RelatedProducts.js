import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";
import ProductService from "@/service/ProductService";
import Slider from "react-slick";
let cx = classNames.bind(styles);

const RelatedProducts = ({ currentProduct }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //   },
    //   {
    //     breakpoint: 600,
    //   },
    //   {
    //     breakpoint: 480,
    //   },
    // ],
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
        {relatedProducts &&
          relatedProducts.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.img} alt="abc" />
                <h2 style={{ color: "#222", fontWeight: "400" }}>
                  {item.name}
                </h2>
                <span
                  style={{
                    color: "#222",
                    fontWeight: "500",
                    textDecoration: "line-through",
                  }}
                >
                  {item.old_price !== 0
                    ? item.old_price.toLocaleString("vi") + "₫"
                    : ""}
                </span>{" "}
                <span style={{ color: "#222", fontWeight: "500" }}>
                  {item.new_price.toLocaleString("vi") + "₫"}
                </span>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
