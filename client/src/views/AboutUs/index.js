import React from "react";
import styles from "@/assets/styles/AboutUs.module.scss";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);

const AboutUs = () => {
  return (
    <Container>
      <div className={cx("breadcrumbs")}>
        <a href="/">
          <span className={cx("home")}>Trang chủ</span>
        </a>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
        <span className={cx("about-me")}>Giới thiệu</span>
      </div>
      <Row>
        <Col xs="9">
          <div className={cx("title-wrapper") + ` mb-5`}>
            <span className={cx("title-content")}>
              THOL - GYM PHỤC VỤ CUỘC SỐNG
            </span>
          </div>
          <p>
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/chatLuong_1.jpg"
              alt="Giới thiệu thương hiệu THOL"
            />
          </p>
          <p className="alert alert-success">
            Trên thị trường hiện nay có nhiều nhà cung cấp để cho khách hàng
            chọn lựa làm đơn vị cung ứng dài lâu. THOL tự hào là một trong những
            đơn vị đầu ngành đưa thực phẩm bổ sung tới tay người tiêu dùng với
            một mức giá hợp lý nhất và chất lượng luôn đảm bảo như công bố. 100%
            có sự kiểm tra khách quan độc lập từ các cơ quan ban ngành nhà nước
            Việt Nam.
          </p>
          <div className={cx("headline") + ` mt-5 mb-2`}>
            <strong className={cx("lead")}>
              Kênh tư vấn bán hàng và hỗ trợ trực tuyến của THOL:
            </strong>
          </div>

          <div className="alert alert-info">
            <img
              src={"https://www.thol.com.vn/media/wysiwyg/stick_2.png"}
              alt=""
              className="mx-1"
            />
            <span>
              Đội ngũ hỗ trợ và nhân viên tư vấn online( 7h AM - 22h PM), tư vấn
              kỹ thuật thể hình và sản phẩm: <b>19002050</b> -<br />
              support@thehinhonline.com.vn.
            </span>
            <br />
            <img
              src={"https://www.thol.com.vn/media/wysiwyg/stick_2.png"}
              alt=""
              className="mx-1"
            />
            <span>
              Tư vấn bán hàng và chuyển phát nhanh:
              <b>19002050 hoặc 0934111640</b> - sales@thehinhonline.com.vn.
            </span>
          </div>
          <div className={cx("alert-warning-wrapper")}>
            <p className="alert alert-warning">
              Toàn thể nhân viên công ty kính chúc quí khách hàng đạt hiệu quả
              cao trong tập luyện, thay đổi &amp; hoàn thiện ngoại hình bản thân
              theo ý muốn!
            </p>
          </div>
        </Col>
        <Col xs="3">
          <Link to="/">
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/banner/Whey-RSP-banner.jpg"
              alt="whey tăng cơ giảm mỡ thol"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
