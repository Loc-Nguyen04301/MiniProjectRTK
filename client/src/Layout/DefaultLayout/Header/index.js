import React, { useState } from "react";
import styles from "@/assets/styles/Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faPhone,
  faList,
  faRetweet,
  faShoppingCart,
  faMagnifyingGlass,
  faUser,
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
import { Link, NavLink, useNavigate } from "react-router-dom";
import WishListCart from "./components/WishListCart";
import { useSelector, useDispatch } from "react-redux";
import { logoutAccount } from "@/redux/auth";
import { resetCart } from "@/redux/cart";

let cx = classNames.bind(styles);

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState("");

  const cartItems = useSelector((state) => state.cart.cartItems);
  const userName = useSelector((state) => state.auth.userName);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("persist:cart");
    dispatch(resetCart());
    dispatch(logoutAccount());
  };

  return (
    <div className={cx("header")}>
      <div className={cx("header-top")}>
        <Container className="d-flex justify-content-between">
          <div className={cx("left")}>
            <p>
              Chào mừng bạn đến với THOL Store
              {userName ? (
                <></>
              ) : (
                <>
                  <Link to="/dang-ky" className={cx("login-text")}>
                    {} Đăng kí {}
                  </Link>
                  hoặc
                  <Link to="/dang-nhap" className={cx("login-text")}>
                    {} Đăng nhập{}
                  </Link>
                </>
              )}
            </p>
          </div>
          {userName ? (
            <div className={cx("right")}>
              <span>
                <FontAwesomeIcon className="px-2" icon={faUser} size={"lg"} />
                Hello, {userName}
              </span>
              <span className={cx("log-out")} onClick={handleSignOut}>
                <Link to={"/"}> Đăng xuất</Link>
              </span>
            </div>
          ) : (
            <div className={cx("right")}>
              <Link to="/dang-nhap">
                <FontAwesomeIcon className="px-2" icon={faLock} size={"xs"} />
                <span>Đăng nhập</span>
              </Link>
            </div>
          )}
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
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          cx("nav-link") +
                          " " +
                          (isActive ? cx("activated") : "")
                        }
                      >
                        <span> Trang chủ </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/gioi-thieu"
                        className={({ isActive }) =>
                          cx("nav-link") +
                          " " +
                          (isActive ? cx("activated") : "")
                        }
                      >
                        <span>Giới thiệu </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/lien-he"
                        className={({ isActive }) =>
                          cx("nav-link") +
                          " " +
                          (isActive ? cx("activated") : "")
                        }
                      >
                        <span>Liên hệ</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="/tai-khoan-ngan-hang"
                        className={({ isActive }) =>
                          cx("nav-link") +
                          " " +
                          (isActive ? cx("activated") : "")
                        }
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
            <Col
              lg="9"
              md="9"
              sm="8"
              xs="12"
              className="d-flex justify-content-between"
            >
              <div className={cx("search-box")}>
                <div className="input-group py-2">
                  <input
                    type="text"
                    className={`form-control ` + cx("input-form")}
                    placeholder="Nhập từ khóa tìm kiếm ..."
                    onChange={handleSearchChange}
                    value={search}
                  />
                  <div className="input-group-append">
                    <Button
                      variant="primary"
                      className={cx("btn-custom")}
                      onClick={handleSearchClick}
                      disabled={search.length === 0}
                      style={{ width: "60px" }}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className={"text-center " + cx("wishlist-cart")}>
                <Link to="/" className={cx("container-icon-heart")}>
                  <FontAwesomeIcon icon={faHeart} size={"xl"} />
                </Link>
                <Link to="/" className={cx("container-icon-retweet")}>
                  <FontAwesomeIcon icon={faRetweet} size={"xl"} />
                </Link>
                <div
                  className={cx("container-icon-shoppingcart")}
                  onClick={toggleCart}
                >
                  <FontAwesomeIcon icon={faShoppingCart} size={"xl"} />
                </div>
                <div className={cx("total-item")}>{cartItems.length}</div>
                {openCart ? (
                  <div className={cx("dropdown-cart")}>
                    <WishListCart />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
