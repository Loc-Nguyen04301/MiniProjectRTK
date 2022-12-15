import React from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductSlider from "./components/ProductSlider";
import { Button } from "reactstrap";
let cx = classNames.bind(styles);

const DetailProduct = () => {
  return (
    <Container>
      <div className={cx("breadcrumbs")}>
        <a href="/">
          <span className={cx("home")}>Trang chủ</span>
        </a>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
        <span className={cx("about-me")}>
          RSP AMINOLEAN NĂNG LƯỢNG GYM BÙNG NỔ (70SV)
        </span>
      </div>
      <Row>
        <Col xs="3">
          <a href="/rsp-whey-protein">
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/banner/Whey-RSP-banner.jpg"
              alt="whey tăng cơ giảm mỡ thol"
            />
          </a>
        </Col>
        <Col xs="9">
          <Row>
            <Col xs="6">
              <img
                src="https://www.thol.com.vn/pub/media/catalog/product/cache/image/800x800/e9c3970ab036de70892d86c6d221abfe/a/m/aminolean-02_1_1_2_1.jpg"
                alt=""
              />
            </Col>
            <Col xs="6">
              <div className={cx("info-detail-container")}>
                <h1 className={cx("title-product")}>
                  RSP AminoLean Năng lượng Gym bùng nổ (70SV)
                </h1>
                <h5 className={cx("review")}>
                  Là người đầu tiên để xem xét sản phẩm này
                </h5>
                <div className={cx("price-product")}>
                  <span className={cx("new-price")}>900.000 ₫</span>
                  <span className={cx("old-price")}>900.000 ₫</span>
                </div>
                <div>
                  Amino thiết yếu phục hồi cơ bắp - BCAA xây dựng cơ nạc.
                  L-Carnitine đốt mỡ và giảm đau cơ - Caffeine và Trà xanh thiên
                  nhiên đốt mỡ và cảm nhận tốt cơ 0 đường 0 calo 0 carb - Mùi vị
                  tuyệt vời.
                </div>
                <div className="d-flex my-5">
                  <span className={cx("number-product")}>
                    <span className={cx("quantity-minus")}>-</span>
                    <span className={cx("display-number")}>1 </span>
                    <span className={cx("quantity-plus")}>+</span>
                  </span>
                  <Button type="submit" className={cx("add-product")}>
                    <span className={cx("add-product-text")}>
                      Thêm vào giỏ hàng
                    </span>
                  </Button>
                </div>
                <div className="my-3">
                  <Button type="submit" className={cx("buy-now")}>
                    <span className={cx("line-1")}>Mua ngay sản phẩm này</span>
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
              </div>
            </Col>
            <Col xs="12"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailProduct;
