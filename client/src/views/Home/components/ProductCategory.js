import React from "react";
import styles from "@/assets/styles/Home.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles);

const ProductCategory = ({ category }) => {
  const products = useSelector((state) => state.product);
  const productsByCategory = products.filter(
    (product) => product.category === category
  );

  return (
    <Row className={cx("news-category-container")}>
      <div className={cx("category-news-box")}>
        <h2 className="from-blog">{category}</h2>
      </div>
      {productsByCategory.map((product) => (
        <Col xs="3" key={product.id}>
          <div className={cx("box-product")}>
            <Link to={`/${product.name}`}>
              <img src={product.img} alt="" />
            </Link>
            <h3>
              <Link to={`/${product.name}`} className="text-center mt-3">
                {product.name}
              </Link>
            </h3>
            <div className="d-flex justify-content-center mt-5">
              <span className="price-container">
                <span className={cx("price-wrapper")}>
                  <span className={cx("new-price")}>
                    {product.new_price.toLocaleString("vi")}₫
                  </span>
                  {product.old_price !== 0 && (
                    <span className={cx("old-price")}>
                      {product.old_price.toLocaleString("vi")}₫
                    </span>
                  )}
                </span>
              </span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCategory;