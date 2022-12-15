import React from "react";
import styles from "@/assets/styles/Contact.module.scss";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ReactHookForm from "@/components/ReactHookForm";

let cx = classNames.bind(styles);

const Contact = () => {
  return (
    <Container>
      <div className={cx("breadcrumbs")}>
        <a href="/">
          <span className={cx("home")}>Trang chủ</span>
        </a>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
        <span className={cx("about-me")}>Liên hệ</span>
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
          <iframe
            className={cx("google-map")}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58832133.2680759!2d-0.5328170999999968!3d25.842197699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1670476163526!5m2!1sen!2s"
            width="860"
            height="450"
            title="google-map"
          ></iframe>
          <div className={cx("form-container")}>
            <Row>
              <Col xs="4">
                <div className={cx("contact-info")}>
                  <div className={cx("title-bonus-page")}>
                    <h2>Liên hệ</h2>
                  </div>
                  <div className={cx("contact-content")}>
                    <p className={cx("contact-description")}>
                      Công ty TNHH Thương Mại BBT
                    </p>
                    <ul className={cx("address-info")}>
                      <li className={cx("add-icon")}>
                        <FontAwesomeIcon
                          className="me-3"
                          icon={faLocationDot}
                        />
                        107-109 đường số 6, Bình Trị Đông B, Bình tân Tp Hồ Chí
                        Minh Việt Nam.
                      </li>
                      <li className={cx("email-icon")}>
                        <FontAwesomeIcon className="me-3" icon={faEnvelope} />
                        Email:
                        <a
                          title="Send Email"
                          href="mailto:huong.tran@bbt.com.vn"
                        >
                          huong.tran@bbt.com.vn
                        </a>
                      </li>
                      <li className={cx("phone-icon")}>
                        <FontAwesomeIcon className="me-3" icon={faPhone} />
                        Tổng đài:{" "}
                        <a title="Call" href="tel:19002050">
                          1900 2050
                        </a>
                      </li>
                      <li className={cx("phone-icon")}>
                        <FontAwesomeIcon className="me-3" icon={faPhone} />
                        Hotline:{" "}
                        <a title="Call" href="tel:0934111640">
                          0934 111 640
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs="8">
                <div className={cx("contact-info")}>
                  <div className={cx("title-bonus-page")}>
                    <h2>GỬI LỜI NHẮN</h2>
                  </div>
                  <ReactHookForm />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
