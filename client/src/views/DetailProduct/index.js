import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { addItem, removeItem } from "@/redux/cart";
import { useDispatch, useSelector } from "react-redux";
import SocialShare from "./components/SocialShare";
import ProductSlider from "./components/ProductSlider";

let cx = classNames.bind(styles);

const DetailProduct = () => {
  let { name } = useParams();
  const products = useSelector((state) => state.product);
  const currentProduct = products.find((item) => item.name === name);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentItem = cartItems?.find((item) => item.name === name);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <>
      {currentProduct ? (
        <Container className="my-5">
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
            <Col xs="9">
              <Row>
                <Col xs="6">
                  {/* <img src={currentProduct.img} alt="current_image" /> */}
                  <ProductSlider image={currentProduct.img} />
                </Col>
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
                    <div>{currentProduct.description}</div>
                    <div className="d-flex my-5">
                      <span className={cx("number-product")}>
                        <span
                          className={cx("quantity-minus")}
                          onClick={() => handleRemoveItem(currentProduct)}
                        >
                          -
                        </span>
                        <span className={cx("display-number")}>
                          {currentItem?.quantity >= 0
                            ? currentItem.quantity
                            : 0}
                        </span>
                        <span
                          className={cx("quantity-plus")}
                          onClick={() => handleAddItem(currentProduct)}
                        >
                          +
                        </span>
                      </span>
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
            <Col></Col>
            <Col xs="8">
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Link with href
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Button with data-bs-target
                </button>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailProduct;
