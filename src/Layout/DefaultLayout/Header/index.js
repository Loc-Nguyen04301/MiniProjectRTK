import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faPhone,
  faList,
  faRetweet,
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);
const Header = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("header-top")}>
        <Container className="d-flex justify-content-between">
          <div className={cx("left")}>
            <p>
              Chào mừng bạn đến với THOL Store {}
              <Link to="/dang-ki" className={cx("login-text")}>
                Đăng kí {}
              </Link>
              hoặc {}
              <Link to="/dang-nhap" className={cx("login-text")}>
                Đăng nhập
              </Link>
            </p>
          </div>
          <div className={cx("right")}>
            <Link to="/login">
              <FontAwesomeIcon className="px-2" icon={faLock} size={"xs"} />
              <span>Đăng nhập</span>
            </Link>
            <div className="d-flex mx-5">
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle caret tag="a">
                  <FontAwesomeIcon className="px-2" icon={faUser} size={"xs"} />
                  <Link to="#">
                    <span>Tài khoản của tôi</span>{" "}
                  </Link>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem active href="#" tag="a">
                    Link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </Container>
      </div>
      <div className={cx("header-middle")}>
        <Container>
          <Row>
            <Col sm="12" md="3" lg="3">
              <div className="logo-wrapper d-flex justify-content-center">
                <Link to="/">
                  <img
                    src="https://www.thol.com.vn/pub/media/logo/stores/5/logo.jpg"
                    alt="THOL Store"
                    width="160"
                    height="62"
                  />
                </Link>
              </div>
            </Col>
            <Col md="9" lg="9" className={cx("menu-list")}>
              <div className="middle-right-nav d-flex justify-content-between pt-4">
                <div className="menu-horizontal w-50">
                  <Nav fill>
                    <NavItem>
                      <Link to="/" className={cx("nav-text")}>
                        <span> Trang chủ </span>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/gioi-thieu" className={cx("nav-text")}>
                        <span>Giới thiệu </span>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/lien-he" className={cx("nav-text")}>
                        <span>Liên hệ</span>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        to="/tai-khoan-ngan-hang"
                        className={cx("nav-text")}
                      >
                        <span>Tài khoản ngân hàng </span>
                      </Link>
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
      <div className={cx("header-bottom")}>
        <Container>
          <Row>
            <Col lg="3" md="3" sm="4" xs="12" className={cx("sidebar-menu")}>
              <div className="menu-content-sidebar">
                <UncontrolledDropdown direction="down">
                  <DropdownToggle
                    caret
                    color="dark"
                    className={cx("dropdown-btn")}
                  >
                    <FontAwesomeIcon icon={faList} size={"2x"} />
                    <span className={cx("text-dropdown")}>Danh mục</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className={cx("list-item")}>
                      Protein & Tăng cân
                    </DropdownItem>
                    <DropdownItem className={cx("list-item")}>
                      Năng lượng & Sức khỏe
                    </DropdownItem>
                    <DropdownItem className={cx("list-item")}>
                      Giảm mỡ & Giảm cân{" "}
                    </DropdownItem>
                    <DropdownItem className={cx("list-item")}>
                      Theo hãng sản xuất
                    </DropdownItem>
                    <DropdownItem className={cx("list-item")}>
                      Phụ kiện Gym
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Col>
            <Col lg="9" md="9" sm="8" xs="12" className="d-flex">
              <div className={`w-75 ` + cx("search-box")}>
                <div className="input-group py-2">
                  <input
                    type="text"
                    className={`form-control ` + cx("input-form")}
                    placeholder="Nhập từ khóa tìm kiếm ..."
                  />
                  <div className="input-group-append">
                    <Button variant="primary" className={cx("btn-custom")}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`w-25 text-center ` + cx("wishlist-cart")}>
                <a href="a" className={cx("container-icon")}>
                  <FontAwesomeIcon icon={faHeart} size={"xl"} />
                </a>
                <a href="a" className={cx("container-icon")}>
                  <FontAwesomeIcon icon={faRetweet} size={"xl"} />
                </a>
                <a href="a" className={cx("container-icon")}>
                  <FontAwesomeIcon icon={faShoppingCart} size={"xl"} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
