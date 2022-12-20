import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "@/assets/styles/Footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMoneyBill,
  faGift,
  faPhone,
  faUser,
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faMobileAndroid,
} from "@fortawesome/free-solid-svg-icons";
import ModalChat from "@/Layout/DefaultLayout/Footer/components/ModalChat";

let cx = classNames.bind(styles);

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenMessageBox = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-row1")}>
        <Container className="d-flex justify-content-between p-5">
          <div className={cx("info")}>
            <FontAwesomeIcon icon={faTruck} size={"2xl"} />
            <div className="mx-4">
              <span>Vận chuyển nhanh</span>
              <p>miễn phí đơn hàng từ 500k</p>
            </div>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon icon={faMoneyBill} size={"2xl"} />
            <div className="mx-4">
              <span>Thanh toán dễ dàng</span>
              <p>COD, chuyển khoản</p>
            </div>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon icon={faGift} size={"2xl"} />
            <div className="mx-4">
              <span>Nhiều ưu đãi</span>
              <p>Khách hàng mới</p>
            </div>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon icon={faPhone} size={"2xl"} />
            <div className="mx-4">
              <span>Gọi ngay</span>
              <p>1900.2050</p>
            </div>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon icon={faUser} size={"2xl"} />
            <div className="mx-4">
              <span>Khách hàng VIP</span>
              <p>Tích điểm đổi quà</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={cx("footer-row2")}>
        <Container className="p-5">
          <Row>
            <Col xs={"9"}>
              <Row>
                <Col xs={"3"}>
                  <div className={cx("sportlight sprotlight1")}>
                    <div className={cx("block-title")}>
                      <h3>HỖ TRỢ: 19002050</h3>
                    </div>
                    <div className={cx("block-content")}>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Giới thiệu{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Liên hệ{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Liên lạc mua hàng{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Liên lạc tư vấn{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col xs={"3"}>
                  <div className={cx("sportlight sprotlight2")}>
                    <div className={cx("block-title")}>
                      <h3>TÀI KHOẢN CỦA TÔI</h3>
                    </div>
                    <div className={cx("block-content")}>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Vào trang cá nhân{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Đăng nhập{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Giỏ hàng của tôi{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Checkout{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col xs={"3"}>
                  <div className={cx("sportlight sprotlight3")}>
                    <div className={cx("block-title")}>
                      <h3>Thông Tin </h3>
                    </div>
                    <div className={cx("block-content")}>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Tài Khoản Ngân Hàng{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Chính sách bảo mật{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Điều khoản sử dụng
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Advanced Search
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col xs={"3"}>
                  <div className={cx("sportlight sprotlight4")}>
                    <div className={cx("block-title")}>
                      <h3>Thông Tin </h3>
                    </div>
                    <div className={cx("block-content")}>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Cách mua hàng online{" "}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Coupon Khuyến Mãi
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Trả hàng và phí
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronRight} size={"xs"} />{" "}
                          Vận chuyển Thanh toán
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={"3"}>
              <div className={cx("contact")}>
                <div className={cx("block-title")}>
                  <h3>Contact us </h3>
                </div>
                <div className={cx("block-content")}>
                  <ul className={cx("contact-list")}>
                    <li>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size={"lg"}
                        className="mx-3"
                      />
                      Công ty TNHH Thương Mại BBT{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size={"lg"}
                        className="mx-3"
                      />
                      Email: sales@thol.com.vn
                    </li>

                    <li className="d-flex">
                      <FontAwesomeIcon
                        icon={faMobileAndroid}
                        size={"lg"}
                        className="mx-3 mt-1"
                      />
                      <div className="d-flex flex-column">
                        <span>Phone 1: 1900 2050</span>
                        <span>Phone 2: 0934 111 640</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="p-5">
          <div className={cx("footer-cate-w") + ` d-flex flex-column`}>
            <nav className="mt-5 text-center ">
              <a href="1">Trang chủ</a>
              <a href="2">Tăng cân </a>
              <a href="3">Phụ nữ</a>
              <a href="4">Giảm cân</a>
              <a href="5">Phụ kiện GYM</a>
              <a href="6">Thời trang GYM</a>
              <a href="7">Thiết bị phòng tập</a>
              <a href="8">Ebook</a>
            </nav>
            <p className="p-3">
              THOL là hệ thống cung cấp các sản phẩm phục vụ tốt nhất cho quá
              trình tập GYM của bạn.
              <br /> Bao gồm các loại thức uống tăng cân, tăng cơ tốt nhất được
              nhập khẩu trực tiếp từ Mỹ.
              <br />
              THOL hân hạnh đồng hành cùng bạn trong quá trình tập luyện chuyên
              nghiệp.
            </p>
          </div>
        </Container>
        <Container className="p-5">
          <Row>
            <Col xs="9">
              <div className={cx("footer-cate-w") + ` p-5`}>
                <div className={cx("footer-newsletter") + ` d-flex`}>
                  <p>ĐĂNG KÍ NHẬN BẢN TIN </p>
                  <form className="d-flex">
                    <input placeholder="Nhập địa chỉ email của bạn" />
                    <button className="px-4">Đăng kí theo dõi</button>
                  </form>
                </div>
              </div>
            </Col>
            <Col xs="3">
              <div className={cx("footer-cate-w") + ` p-5`}>
                <div className={cx("footer-socials") + ` d-flex`}>
                  <p>Kết nối</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={cx("footer-row3")}>
        <Container>
          <div className={cx("copyright-footer") + ` m-5`}>
            <address>
              Copyright ©{" "}
              <a href="http://www.thehinhonline.com.vn/">ThehinhOnline</a> . All
              Rights Reserved.
            </address>
          </div>
          <div className={cx("payment-footer")}>
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/payment/payment1.png"
              alt="Payment"
            />
            <img
              src="https://www.thol.com.vn/pub/media/wysiwyg/payment/payment2.png"
              alt="Payment"
            ></img>
          </div>
        </Container>
      </div>
      <div className={cx("phone_bottom")}>
        <a href="tel:19002050">
          <span className={cx("active_phone")}>
            <FontAwesomeIcon icon={faPhone} />
          </span>
        </a>
      </div>
      <div className={cx("messenger_bottom")} onClick={handleOpenMessageBox}>
        <span className={cx("active_messenger")}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <path
              fill="white"
              d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"
            ></path>
          </svg>
        </span>
      </div>
      {openModal ? <ModalChat setOpenModal={setOpenModal} /> : ""}
    </div>
  );
};

export default Footer;
