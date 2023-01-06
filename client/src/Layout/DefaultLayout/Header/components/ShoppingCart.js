import React, { useState } from "react";
import styles from "@/assets/styles/WishListCart.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteItem } from "@/redux/cart";

let cx = classNames.bind(styles);

const WishListCart = () => {
  const [openModal, setOpenModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const toggleModalAndRemoveItem = (product) => {
    setTimeout(() => {
      dispatch(deleteItem(product));
      setOpenModal((prev) => !prev);
    }, 200);
  };
  return (
    <Container>
      {cartItems.length > 0 ? (
        <>
          <h3 className={cx("title")}>Các sản phẩm bạn chọn </h3>
          <ul className={cx("cart-list")}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className={cx("cart-item")}>
                  <div className={cx("cart-img-container")}>
                    <img src={item.img} alt="item" className={cx("cart-img")} />
                  </div>
                  <div className={cx("cart-information")}>
                    <p className={cx("cart-name")}>{item.name}</p>
                    <p className={cx("cart-newprice")}>
                      {item.new_price.toLocaleString("vi")}₫
                    </p>
                    <span className={cx("cart-quantity")}>{item.quantity}</span>
                  </div>
                  <div className={cx("cart-icon-container")}>
                    <div className={cx("cart-icon")}>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        size={"lg"}
                        onClick
                      />
                    </div>
                    <div className={cx("cart-icon")}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        size={"lg"}
                        onClick={toggleModal}
                      />
                    </div>
                  </div>
                </div>
                <Modal isOpen={openModal} toggle={toggleModal}>
                  <ModalHeader toggle={toggleModal}></ModalHeader>
                  <ModalBody>
                    Bạn có chắc bạn muốn loại bỏ sản phẩm này khỏi giỏ mua hàng?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      style={{ backgroundColor:"var(--primary-color)" , borderColor:"var(--primary-color)"}}
                      onClick={() => toggleModalAndRemoveItem(item)}
                    >
                      Đồng ý
                    </Button>
                    <Button color="secondary" onClick={toggleModal}>
                      Hủy bỏ
                    </Button>
                  </ModalFooter>
                </Modal>
              </li>
            ))}
          </ul>
          <div className={cx("total-amount-container")}>
            <div className={cx("label")}>Tổng giỏ hàng:</div>
            <div className={cx("total-amount")}>
              {totalAmount.toLocaleString("vi")}₫
            </div>
          </div>
          <div className={cx("shopping-cart")}>
            <Link to="/thanh-toan">
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </>
      ) : (
        <div className={cx("title")}>
          Hiện chưa có sản phẩm nào trong giỏ hàng.
        </div>
      )}
    </Container>
  );
};

export default WishListCart;
