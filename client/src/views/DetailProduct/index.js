import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { addItem, removeItem } from "@/redux/cart";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "@/service/ProductService";

import SocialShare from "./components/SocialShare";
import ProductSlider from "./components/ProductSlider";
import DescriptionReview from "./components/DescriptionReview";
import RelatedProducts from "./components/RelatedProducts";

let cx = classNames.bind(styles);

const DetailProduct = () => {
  let { name } = useParams();
  // const products = useSelector((state) => state.product);
  // const currentProduct = products.find((item) => item.name === name);
  const [currentProduct, setCurrentProduct] = useState();
  const [reviews, setReviews] = useState();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentItem = cartItems?.find((item) => item.name === name);

  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchingData = async () => {
      const res = await ProductService.getByName(name);
      setReviews(res.data.reviews);
      setCurrentProduct(res.data.products[0]);
    };
    fetchingData();
  }, [name]);

  return (
    <>
      {currentProduct ? (
        <Container className="py-5">
          <div className={cx("breadcrumbs")}>
            <a href="/">
              <span className={cx("home")}>Trang chủ</span>
            </a>
            <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
            <span className={cx("about-me")}>{currentProduct.name}</span>
          </div>
          <Row>
            <Col xs="3">
              <Link to="/">
                <img
                  src="https://www.thol.com.vn/wp-content/uploads/2023/01/Whey-RSP-banner.jpg"
                  alt="banner-left"
                />
              </Link>
            </Col>
            <Col xs="1"></Col>
            <Col xs="8">
              <Row>
                <Col xs="5">
                  <ProductSlider image={currentProduct.img} />
                </Col>
                <Col xs="1"></Col>
                <Col xs="6">
                  <div className={cx("info-detail-container")}>
                    <h1 className={cx("title-product")}>{name}</h1>
                    <h5 className={cx("review")}>
                      Là người đầu tiên để xem xét sản phẩm này
                    </h5>
                    <div className={cx("price-product")}>
                      <span className={cx("new-price")}>
                        {currentProduct.new_price.toLocaleString("vi")}₫
                      </span>
                      {currentProduct.old_price !== 0 && (
                        <span className={cx("old-price")}>
                          {currentProduct.old_price.toLocaleString("vi")}₫
                        </span>
                      )}
                    </div>
                    <p className={cx("description")}>
                      {currentProduct.description}
                    </p>
                    <div className="d-flex w-75 align-items-center">
                      <div
                        className={cx("number-product")}
                        style={{ height: "30px" }}
                      >
                        <input
                          className={cx("quantity-minus")}
                          defaultValue="-"
                          onClick={() => handleRemoveItem(currentProduct)}
                        />
                        <input
                          className={cx("display-number")}
                          defaultValue={
                            currentItem?.quantity >= 0
                              ? currentItem.quantity
                              : 0
                          }
                        />
                        <input
                          className={cx("quantity-plus")}
                          defaultValue="+"
                          onClick={() => handleAddItem(currentProduct)}
                        />
                      </div>
                      <Button type="submit" className={cx("add-product")}>
                        <span className={cx("add-product-text")}>
                          Thêm vào giỏ hàng
                        </span>
                      </Button>
                    </div>
                    <div className="my-3">
                      <Button type="submit" className={cx("buy-now")}>
                        <span className={cx("line-1")}>
                          Mua ngay sản phẩm này
                        </span>
                        <br />
                        <span className={cx("line-2")}>
                          Cam kết hàng chính hãng, thật 100%
                        </span>
                      </Button>
                    </div>
                    <div className="my-3">
                      <Button type="submit" className={cx("call-support")}>
                        <span className={cx("line-1")}>
                          Gọi tư vấn ngay 1900 2050
                        </span>
                      </Button>
                    </div>
                    <div className="my-5">
                      <SocialShare />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs="1"></Col>
            <Col xs="11" style={{ marginTop: "50px" }}>
              <DescriptionReview
                currentProduct={currentProduct}
                reviews={reviews}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="1"></Col>
            <Col xs="10">
              <RelatedProducts currentProduct={currentProduct} />
            </Col>
            <Col xs="1"></Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailProduct;
