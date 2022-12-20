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
      <Row className="flex-nowrap justify-content-end my-5">
        <SimpleImageSlider
          width={650}
          height={510}
          images={imagesPosterSlider}
          showBullets={true}
          showNavs={true}
        />
        <ul className={cx("list-image")}>
          <li>
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/home/banner-whey.jpg"
              alt="Whey protein hấp thu nhanh BBT"
            ></img>
          </li>
          <li>
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/home/banner-fatburner.jpg"
              alt="đốt mỡ giảm cân BBT"
            ></img>
          </li>
          <li>
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/home/banner-mass.jpg"
              alt="tăng cân tăng cơ bbt"
            ></img>
          </li>
        </ul>
      </Row>
      <Row className={cx("poster-main")}>
        <Col xs="6">
          <img
            src="https://www.thol.com.vn/pub/media/wysiwyg/banner/Vitadapt-1-hang-da-ve.jpg"
            alt="VITAMIN KHOÁNG CHẤT SỐNG KHOẺ TẬP KHOẺ - Hàng ngon đã về, order ngay kẻo lỡ"
          />
        </Col>
        <Col xs="6">
          <img
            src="https://www.thol.com.vn/pub/media/wysiwyg/Khuyen-Mai/2021-06-18_titanium_GA_pancake.jpg"
            alt="Titanium Isolate tặng Pancake"
          />
        </Col>
      </Row>
      <ProductCategory category={"PROTEIN TĂNG CÂN"} />
      <ProductCategory category={"NĂNG LƯỢNG & SỨC KHỎE"} />
      <ProductCategory category={"GIẢM MỠ & GIẢM CÂN"} />
      <Row className={cx("banner-container")}>
        <a href="/">
          <img
            src="https://www.thol.com.vn/pub/media/wysiwyg/home/home-bottom-banner-wide.jpg"
            alt="banner-thol"
          />
        </a>
      </Row>
      <Row className={cx("news-category-container")}>
        <div className={cx("category-news-box")}>
          <h2 className="from-blog">Tin tức</h2>
        </div>
        <Col xs="4">
          <div className={cx("blog-inner")}>
            <div className={cx("blog-img")}>
              <a href="https://www.bbt.com.vn/proteinfabrikken-hop-tac-voi-bbt/">
                <img
                  src="https://www.thol.com.vn/pub/media/wysiwyg/banner/Proteinfabrikken-bbt.jpg"
                  alt="Proteinfabrikken thương hiệu số 1 Na Uy hợp tác với BBT"
                />
              </a>
            </div>
            <div className={cx("blog-content")}>
              <a href="https://www.bbt.com.vn/proteinfabrikken-hop-tac-voi-bbt/">
                Proteinfabrikken thương hiệu số 1 Na Uy hợp tác với BBT
              </a>
            </div>
          </div>
        </Col>

        <Col xs="4">
          <div className={cx("blog-inner")}>
            <div className={cx("blog-img")}>
              <a href="https://www.bbt.com.vn/mua-may-chay-bo-tai-nha/">
                <img
                  src="https://www.thol.com.vn/pub/media/wysiwyg/banner/sole-f85.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className={cx("blog-content")}>
              <a href="https://www.bbt.com.vn/proteinfabrikken-hop-tac-voi-bbt/">
                Có nên mua máy chạy bộ tại nhà?
              </a>
            </div>
          </div>
        </Col>

        <Col xs="4">
          <div className={cx("blog-inner")}>
            <div className={cx("blog-img")}>
              <a href="https://www.bbt.com.vn/doi-tac-bbt/">
                <img
                  src="https://www.thol.com.vn/pub/media/wysiwyg/banner/hop-nutrex-1400x788-1.jpg"
                  alt="Những đối tác chiến lược hàng đầu thế giới của BBT tại Việt Nam"
                />
              </a>
            </div>
            <div className={cx("blog-content")}>
              <a href="https://www.bbt.com.vn/proteinfabrikken-hop-tac-voi-bbt/">
                Những đối tác chiến lược hàng đầu thế giới của BBT tại Việt Nam
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-5 d-flex align-items-center">
        <ManufacturerSlider />
      </Row>
    </Container>
  );
};

export default Home;
