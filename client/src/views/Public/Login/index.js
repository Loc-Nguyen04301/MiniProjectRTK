import React from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAccount } from "@/redux/auth";
import { useDispatch } from "react-redux";

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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const config = {
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login`,
        data: data,
      };
      const res = await axios(config);
      const { token, userName, email, userId } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
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
        dispatch(loginAccount({ token, userName, email, userId }));
        navigate("/");
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
    <Container>
      <div className={cx("login-container")}>KHÁCH HÀNG ĐĂNG NHẬP</div>
      <Row>
        <Col lg="6" md="9">
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
              <div>
                <div className={cx("label-email")}>Email</div>
                <input {...register("email")} type={"text"} />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <div className={cx("label-password")}>Mật khẩu</div>
                <input {...register("password")} type={"password"} />
                <p>{errors.password?.message}</p>
              </div>
              <div className="d-flex justify-content-between">
                <Button type="submit" className={cx("button-submit")}>
                  <span className={cx("dang-nhap")}>Đăng nhập</span>
                </Button>
                <a href="/dang-ky">
                  <span>Bạn chưa có tài khoản ?</span>
                </a>
              </div>
            </form>
            <ToastContainer />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
