import React from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/DetailProduct.module.scss";
import { Button, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useStars } from "stars-rating-react-hooks";
import ReviewService from "@/service/ReviewService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

let cx = classNames.bind(styles);

const DescriptionReview = ({ reviews, currentProduct }) => {
  const userName = useSelector((state) => state.auth.userName);
  const userId = useSelector((state) => state.auth.userId);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const navigate = useNavigate();

  const config = {
    totalStars: 5,
    initialSelectedValue: 2,
    renderFull: "★",
    renderEmpty: "☆",
  };

  const { stars, getStarProps, getStarWrapperProps } = useStars(config);

  const [formValue, setFormValue] = useState({
    description: "",
    star: config.initialSelectedValue,
  });

  const handleCollapseDescription = () => {
    setOpen1((prev) => !prev);
  };

  const handleCollapseReview = () => {
    setOpen2((prev) => !prev);
  };

  const handleChangeDescription = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log({
        product_id: currentProduct.id,
        user_id: userId,
        ...formValue,
      });
      const res = await ReviewService.create({
        product_id: currentProduct.id,
        user_id: userId,
        ...formValue,
      });
      toast.success(res.data.status, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate(0);
      }, 3000);
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={cx("according")}>
      <div className={cx("according-description")}>
        <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
          className={(open1 ? cx("active") : "") + " " + cx("according-title")}
          onClick={handleCollapseDescription}
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            className={(open1 ? cx("active") : "") + ""}
          />
          Mô tả
        </a>
        <Container>
          <Row>
            <div
              className="collapse multi-collapse"
              id="multiCollapseExample1"
              style={{ padding: " 0px 0px 0px 15px" }}
            >
              <h2 className="mt-3">
                <span>
                  <b>Hướng dẫn sử dụng</b>
                </span>
              </h2>
              <p className="alert alert-success">
                <span>
                  Pha 1 muỗng RSP Whey cùng với 250-500 ml nước lạnh hoặc nước
                  ép trái cây tùy thích. Lắc đều cho tới khi bột hòa tan và sử
                  dụng ngay sau tập.
                </span>
              </p>
              <h2>
                <span>
                  <b>Bạn có thể mua Whey RSP ở đâu?</b>
                </span>
              </h2>
              <p>
                <span>
                  Các sản phẩm của RSP đã có mặt tại hàng chục quốc gia trên thế
                  giới trong đó có Việt Nam. Công ty TNHH Thương Mại BBT tự hào
                  là nhà phân phối độc quyền RSP Việt Nam.
                </span>
              </p>
              <p className="alert alert-warning">
                <span>
                  Chú ý: Sản phẩm này là thực phẩm bổ sung, không phải thuốc
                  chữa bệnh, không dùng để thế thuốc chữa bệnh. Sản phẩm này
                  được đăng ký tại Cục Vệ sinh an toàn thực phẩm trực thuộc Bộ Y
                  tế và đã được kiểm tra tại Chi cục hải quan Thành Phố Hồ Chí
                  Minh cũng như xét nghiệm các chỉ tiêu sức khỏe tại Các công ty
                  giám định chất lượng được cho phép của Bộ Y Tế Việt Nam.
                </span>
              </p>
              <p className="alert alert-info mb-5">
                <span>
                  BBT là công ty phân phối độc quyền nhãn hàng này trên phạm vi
                  toàn quốc. Nhằm bảo đảm không mua phải hàng giả vui lòng kiểm
                  tra tem Chống hàng giả của Bộ Công an, nhãn phụ sản phẩm của
                  công ty BBT và thẻ cào nhắn tin xác nhận sản phẩm (3 tem tất
                  cả). Nếu có bất kỳ dấu hiệu nghi ngờ bạn hãy gọi điện thoại về
                  tổng đài 19002050 để được tư vấn (giờ hành chính). Hãy đăng kí
                  thành viên và chọn chức năng mua hàng trực tuyến để được chúng
                  tôi chăm sóc tốt hơn, cũng như hưởng nhiều ưu đãi hơn.
                </span>
              </p>
            </div>
          </Row>
        </Container>
      </div>
      <div className={cx("according-review")}>
        <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
          className={(open2 ? cx("active") : "") + " " + cx("according-title")}
          onClick={handleCollapseReview}
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            className={(open2 ? cx("active") : "") + ""}
          />
          Đánh giá
        </a>
        <Container>
          <Row>
            <div
              className="collapse multi-collapse py-5"
              id="multiCollapseExample2"
            >
              <div className={cx("comments")}>
                <h3>Đánh giá </h3>
                {reviews.length > 0 ? (
                  <div>
                    {reviews.map((review, index) => (
                      <div
                        key={`${review}-${index}`}
                        className={cx("review-container")}
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&usqp=CAU"
                          alt="user_name"
                          style={{ maxHeight: "40px", paddingRight: "8px" }}
                        />
                        <div>
                          <span style={{ color: "rgba(0,0,0,.87)" }}>
                            {review.name}
                          </span>
                          <div>
                            {[...Array(review.star)].map((item, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                style={{ color: "var(--primary-color)" }}
                              />
                            ))}
                            {5 - review.star > 0 &&
                              [...Array(5 - review.star)].map((item, index) => (
                                <FontAwesomeIcon icon={faStar} key={index} />
                              ))}
                          </div>
                          <p>
                            {new Date(review.createdAt)
                              .toISOString()
                              .substring(0, 10)}
                          </p>
                          <p style={{ color: "#222", fontSize: "1.7rem" }}>
                            {review.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Chưa có đánh giá nào</p>
                )}
                {userName ? (
                  <form onSubmit={handleSubmit}>
                    <div className={cx("write-review-container")}>
                      <div className={cx("write-review-inner")}>
                        <input
                          name="description"
                          className={cx("placeholder-review")}
                          placeholder="Viết đánh giá về sản phẩm tại đây"
                          onChange={handleChangeDescription}
                        />
                      </div>
                    </div>
                    <div className={cx("rating-container")}>
                      <div>
                        <p className={cx("rating-title")}>Rating sản phẩm</p>
                        <span
                          {...getStarWrapperProps({
                            style: {
                              cursor: "pointer",
                              display: "inline-block",
                              color: "var(--primary-color)",
                            },
                          })}
                        >
                          {stars.map((star, index) => (
                            <span
                              key={index}
                              {...getStarProps(index, {
                                style: {
                                  fontSize: "40px",
                                  display: "inline-block",
                                },
                                onClick: (event, ratedValue) => {
                                  setFormValue({
                                    ...formValue,
                                    star: ratedValue,
                                  });
                                },
                              })}
                            >
                              {star}
                            </span>
                          ))}
                        </span>
                      </div>
                      <div className="position-relative">
                        <Button
                          color="secondary"
                          className={cx("button-rating")}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className={cx("write-review-container")}>
                    <div className={cx("write-review-inner")}>
                      <p>
                        Chỉ những khách hàng đã đăng nhập và mua sản phẩm này
                        mới có thể đưa ra đánh giá.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className={cx("review-form")}></div>
            </div>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DescriptionReview;
