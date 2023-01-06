import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Row style={{ margin: " 50px 0px" }}>
        <Col xs="9">
          <div>
            <h1 style={{ textAlign: "center" }}>
              404 - Trang bạn muốn truy cập không tồn tại hoặc đã thay đổi
            </h1>
          </div>
          <p>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
              alt="404 page not found"
            />
          </p>
          <p style={{ textAlign: "center" }}>
            Vui lòng sử dụng mục tìm kiếm để tìm sản phẩm bạn muốn xem, hoặc
            quay <a href="/">về trang chủ</a>
          </p>
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

export default NotFound;
