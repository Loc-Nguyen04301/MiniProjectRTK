import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Col, Container, Row } from "reactstrap";
import styles from "@/assets/styles/Home.module.scss";
import classNames from "classnames/bind";
import { imagesPosterSlider } from "@/assets/data/dataSlider";
import ManufacturerSlider from "./components/ManufacturerSlider";
import ProductCategory from "./components/ProductCategory";
import productCategoryList from "@/assets/data/productCategoryList";

let cx = classNames.bind(styles);

const Home = () => {
  return (
    <Container>
      <Row style={{ paddingTop: "40px" }}>
        <Col xs="12" style={{ display: "flex", justifyContent: "center" }}>
          <SimpleImageSlider
            width={"800px"}
            height={"510px"}
            images={imagesPosterSlider}
            showBullets={true}
            showNavs={true}
            autoPlay
          />
        </Col>
      </Row>
      <Row className={cx("poster-main")}>
        <Col xs="6">
          <img
            src="https://www.thol.com.vn/wp-content/uploads/2023/01/Vitadapt-1-hang-da-ve-1024x576.jpg"
            alt="VITAMIN KHOÁNG CHẤT SỐNG KHOẺ TẬP KHOẺ - Hàng ngon đã về, order ngay kẻo lỡ"
            style={{ padding: "0 15px" }}
          />
        </Col>
        <Col xs="6">
          <img
            src="https://www.thol.com.vn/wp-content/uploads/2023/01/2021-06-18_titanium_GA_pancake-1024x576.jpg"
            alt="Titanium Isolate tặng Pancake"
            style={{ padding: "0 15px" }}
          />
        </Col>
      </Row>
      {productCategoryList.map((item, index) => (
        <ProductCategory category={item} key={index} />
      ))}
      <Row className={cx("banner-container")}>
        <a href="/" className={cx("banner-image")}>
          <img
            src="https://www.thol.com.vn/wp-content/uploads/2023/01/home-bottom-banner-wide-1024x193.jpg"
            alt="banner-thol"
          />
        </a>
      </Row>
      <Row className="d-flex align-items-center pb-5">
        <ManufacturerSlider />
      </Row>
    </Container>
  );
};

export default Home;
