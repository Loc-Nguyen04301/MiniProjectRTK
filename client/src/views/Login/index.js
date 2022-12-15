import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

let cx = classNames.bind(styles);

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("Password is required").min(6),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    navigate("/");
  };

  return (
    <Container>
      <div className={cx("login-container")}>KHÁCH HÀNG ĐĂNG NHẬP</div>
      <Row>
        <Col xs="12">
          <div className={cx("block-customer-login")}>
            <p>Khách hàng đã đăng ký</p>
            <p>
              Nếu bạn có một tài khoản, hãy đăng nhập bằng địa chỉ email của
              bạn.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cx("form-container")}
            >
              <div className={cx("label-email")}>Email</div>
              <input {...register("email")} type={"text"} />
              <p>{errors.email?.message}</p>

              <div className={cx("label-password")}>Mật khẩu</div>
              <input {...register("password")} type={"password"} />
              <p>{errors.password?.message}</p>
              <div className="d-flex justify-content-between">
                <Button type="submit" className={cx("button-submit")}>
                  <span className={cx("dang-nhap")}>Đăng nhập</span>
                </Button>
                <span>Bạn chưa có tài khoản ?</span>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
