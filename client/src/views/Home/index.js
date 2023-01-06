import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Col, Container, Row } from "reactstrap";
import styles from "@/assets/styles/Home.module.scss";
import classNames from "classnames/bind";
import { imagesPosterSlider } from "@/assets/datas/dataSlider";
import ManufacturerSlider from "./components/ManufacturerSlider";
import ProductCategory from "./components/ProductCategory";

let cx = classNames.bind(styles);

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <SimpleImageSlider
          width={650}
          height={510}
          images={imagesPosterSlider}
          showBullets={true}
          showNavs={true}
        />
      </Row>
      <Row className={cx("poster-main")}>
        <Col xs="6">
          <img
            src="https://www.thol.com.vn/wp-content/uploads/2023/01/Vitadapt-1-hang-da-ve-1024x576.jpg"
            alt="VITAMIN KHOÁNG CHẤT SỐNG KHOẺ TẬP KHOẺ - Hàng ngon đã về, order ngay kẻo lỡ"
          />
        </Col>
        <Col xs="6">
          <img
            src="https://www.thol.com.vn/wp-content/uploads/2023/01/2021-06-18_titanium_GA_pancake-1024x576.jpg"
            alt="Titanium Isolate tặng Pancake"
          />
        </Col>
      </Row>
      <ProductCategory category={"SẢN PHẨM KHUYẾN MÃI"} />
      <ProductCategory category={"PROTEIN TĂNG CÂN"} />
      <ProductCategory category={"NĂNG LƯỢNG & SỨC KHỎE"} />
      <ProductCategory category={"GIẢM MỠ & GIẢM CÂN"} />
      <Row className={cx("banner-container")}>
        <a href="/">
          <img
            style={{ marginLeft: "50px" }}
            src="https://www.thol.com.vn/wp-content/uploads/2023/01/home-bottom-banner-wide-1024x193.jpg"
            alt="banner-thol"
          />
        </a>
      </Row>
      <Row className="m-5 d-flex align-items-center">
        <ManufacturerSlider />
      </Row>
    </Container>
  );
};

export default Home;
