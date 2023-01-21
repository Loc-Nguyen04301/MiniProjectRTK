import React from "react";
import { Container, Row, Col, Table, Nav, NavItem, NavLink } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "@/redux/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";

let cx = classNames.bind(styles);

const Shopping = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const handleAddItem = (product,amount) => {
    dispatch(addItem(product,amount));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <Container>
      <Nav
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.8rem",
          padding: "50px 0",
        }}
      >
        <NavItem>
          <NavLink active href="/gio-hang">
            SHOPPING CART
          </NavLink>
        </NavItem>
        <NavItem>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xs"
            className="mx-4 mt-3"
          />
        </NavItem>
        <NavItem>
          <NavLink href="/thanh-toan">CHECKOUT DETAILS</NavLink>
        </NavItem>
      </Nav>
      <Row style={{ paddingBottom: "50px" }}>
        <Col xs="7" style={{ borderRight: "1px solid #ececec" }}>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>SẢN PHẨM</th>
                <th>ĐƠN GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th style={{ textAlign: "end" }}>TẠM TÍNH</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <th scope="row" style={{ position: "relative" }}>
                    <p
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      {index + 1}
                    </p>
                  </th>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <img src={item.img} alt="item" width={"80px"} />
                    <span>{item.name}</span>
                  </td>
                  <td style={{ position: "relative" }}>
                    <p
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      {item.new_price.toLocaleString("vi")}₫
                    </p>
                  </td>
                  <td style={{ position: "relative" }} width="90px">
                    <div
                      className={cx("info-detail-container")}
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <span className={cx("number-product")}>
                        <div
                          className={cx("quantity-minus")}
                          onClick={() => handleRemoveItem(item)}
                        >
                          <div>-</div>
                        </div>
                        <span className={cx("display-number")}>
                          {item?.quantity >= 0 ? item.quantity : 0}
                        </span>
                        <div
                          className={cx("quantity-plus")}
                          onClick={() => handleAddItem(item, 1)}
                        >
                          <div>+</div>
                        </div>
                      </span>
                    </div>
                  </td>
                  <td style={{ position: "relative" }}>
                    <p
                      style={{
                        position: "absolute",
                        margin: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      {item.totalPrice.toLocaleString("vi")}₫
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs="5">
          <div style={{ padding: "0px 50px" }}>
            <h2>CỘNG GIỎ HÀNG</h2>
            <Table>
              <tbody>
                <tr>
                  <th>Tạm tính</th>
                  <td>
                    <span>
                      <bdi>
                        {totalAmount.toLocaleString("vi")}
                        <span>₫</span>
                      </bdi>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>Tổng</th>
                  <td>
                    <strong>
                      <span>
                        <bdi>
                          {totalAmount.toLocaleString("vi")}
                          <span>₫</span>
                        </bdi>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className={cx("thanh-toan-wrapper")}>
              <a href="/thanh-toan" className={cx("thanh-toan-btn")}>
                Tiến hành thanh toán
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shopping;
