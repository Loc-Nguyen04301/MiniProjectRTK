import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  Button,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import {
  faList,
  faRetweet,
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ShoppingCart from "./components/ShoppingCart";
import ProductService from "@/service/ProductService";

import styles from "@/assets/styles/Header.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HeaderBottom = () => {
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const res = await ProductService.getByName(search);
        if (search === "") setSearchProducts([]);
        else setSearchProducts(res.data.products);
        setLoading(false);
      };
      setTimeout(() => {
        fetchingData();
      }, 1000);
      setLoading(true);
    } catch (e) {
      setLoading(true);
    }
  }, [search]);
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

  const handleDetailProduct = (name) => {
    setSearch("");
    setTimeout(() => {
      navigate(`/detail/${name}`);
    }, 1000);
  };

  const handleNavigateCategory = (category) => {
    navigate(`/category/${category}`);
  };

  const clickToCheckOut = () => {
    navigate(`/gio-hang`);
  };

  return (
    <Fragment>
      <div className={cx("header-bottom")}>
        <Container>
          <Row>
            <Col lg="3" md="3" sm="4" className={cx("sidebar-menu")}>
              <div className={cx("menu-content-sidebar")}>
                <UncontrolledDropdown direction="down">
                  <DropdownToggle
                    caret
                    color="dark"
                    className={cx("dropdown-btn")}
                  >
                    <FontAwesomeIcon icon={faList} size={"2x"} />
                    <span className={cx("text-dropdown")}>
                      Danh mục sản phẩm
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li
                      className={cx("list-item")}
                      onClick={() => {
                        handleNavigateCategory("Protein Tăng cân");
                      }}
                    >
                      Protein Tăng cân
                    </li>
                    <li
                      className={cx("list-item")}
                      onClick={() => {
                        handleNavigateCategory("Năng lượng & Sức khỏe");
                      }}
                    >
                      Năng lượng & Sức khỏe
                    </li>
                    <li
                      className={cx("list-item")}
                      onClick={() => {
                        handleNavigateCategory("Giảm mỡ & Giảm cân");
                      }}
                    >
                      Giảm mỡ & Giảm cân
                    </li>
                    <li
                      className={cx("list-item")}
                      onClick={() => {
                        handleNavigateCategory("Theo hãng sản xuất");
                      }}
                    >
                      Theo hãng sản xuất
                    </li>
                    <li
                      className={cx("list-item")}
                      onClick={() => {
                        handleNavigateCategory("Phụ kiện Gym");
                      }}
                    >
                      Phụ kiện Gym
                    </li>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Col>
            <Col lg="9" md="9" sm="8" xs="12" className={cx("navbar-search")}>
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
                      disabled={loading}
                    >
                      {loading ? (
                        <Spinner
                          style={{
                            height: "2rem",
                            width: "2rem",
                          }}
                        ></Spinner>
                      ) : (
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                      )}
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
                <div className={cx("total-item")}>{totalQuantity}</div>
                {openCart ? (
                  <div className={cx("dropdown-cart")}>
                    <ShoppingCart />
                  </div>
                ) : (
                  ""
                )}
                <div className="d-flex">
                  <Button
                    color="danger"
                    style={{
                      height: "40px",
                      fontSize: "1.4rem",
                      width: "80px",
                    }}
                    onClick={clickToCheckOut}
                  >
                    Đặt hàng
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {searchProducts?.length > 0 ? (
        <div className={cx("list-product-wrapper")}>
          <ul className={cx("list-product")}>
            {searchProducts.map((item) => (
              <li
                key={item.id}
                className={cx("item-product")}
                onClick={() => {
                  handleDetailProduct(item.name);
                }}
              >
                <div className={cx("item-product-container")}>
                  <img src={item.img} alt="item-product" />
                  <div>{item.name}</div>
                  <span>{item.new_price.toLocaleString("vi")}₫</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default HeaderBottom;
