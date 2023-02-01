import React from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/Header.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HeaderMiddle = () => {
  return (
    <div className={cx("header-middle")}>
      <Container>
        <Row>
          <Col sm="12" md="3" lg="3">
            <div className="logo-wrapper d-flex justify-content-center">
              <a href="/">
                <img
                  src="https://www.thol.com.vn/wp-content/uploads/2023/01/thol-logo.jpg"
                  alt="THOL Store"
                  width="160"
                  height="62"
                />
              </a>
            </div>
          </Col>
          <Col md="9" lg="9" className={cx("menu-list")}>
            <div className="middle-right-nav d-flex justify-content-between pt-4">
              <div className="menu-horizontal" style={{ minWidth: "350px" }}>
                <Nav fill>
                  <NavItem>
                    <NavLink to="/" className={cx("nav-link")}>
                      <span> Trang chủ </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/gioi-thieu" className={cx("nav-link")}>
                      <span>Giới thiệu </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/lien-he" className={cx("nav-link")}>
                      <span>Liên hệ</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/tai-khoan-ngan-hang"
                      className={cx("nav-link")}
                    >
                      <span>Tài khoản ngân hàng </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <div className="header-support">
                <FontAwesomeIcon icon={faPhone} />
                <strong>Hotline:</strong>
                <span className={cx("primary-text")}> 1900 2050</span>
                <p>Email: sales@thol.com.vn</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderMiddle;
