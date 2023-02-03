import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/BankAccount.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";

let cx = classNames.bind(styles);

const BankAccount = () => {
  return (
    <Container className="mb-5">
      <div className={cx("breadcrumbs")}>
        <a href="/">
          <span className={cx("home")}>Trang chủ</span>
        </a>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
        <span className={cx("about-me")}>Tài khoản ngân hàng</span>
      </div>
      <Row>
        <Col xs="9">
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#222", fontWeight: "500", fontSize: "3.2rem" }}>
              Thông tin tài khoản ngân hàng – Nguyễn Gia Lộc
            </p>
            <p>POSTED ON {moment().format("LLL")}, By LOCNGUYEN</p>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <h2
              style={{ color: "#222", fontWeight: "500", fontSize: "2.8rem" }}
            >
              Thông tin chuyển khoản mua hàng THOL
            </h2>
            <p style={{ textAlign: "center" }}>
              Thông tin chuyển khoản mua hàng THOL
            </p>
            <p className="alert alert-success">
              <strong>Ngân hàng TMCP Công Thương Việt Nam VietinBank</strong>
              <br /> Chủ tài khoản: CT TNHH THƯƠNG MẠI BBT
              <br />
              Số tài khoản:
              <a href="tel:0721006868888">
                <span> 0721006868888</span>
              </a>
              <br />
              Chi nhánh: Kỳ Đồng
            </p>
          </div>
        </Col>
        <Col xs="3">
          <Link to="/">
            <img
              src="https://www.thol.com.vn/wp-content/uploads/2023/01/Whey-RSP-banner.jpg"
              alt="whey tăng cơ giảm mỡ thol"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default BankAccount;
