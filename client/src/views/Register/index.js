import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let cx = classNames.bind(styles);

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required("Password is required").min(6),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formRef = useRef();

  const onSubmit = async (data) => {
    try {
      const config = {
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/register`,
        data: data,
      };
      const response = await axios(config);
      toast.success(response.data.status, {
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
        formRef.current.reset();
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
      <div className={cx("login-container")}>TẠO MỚI TÀI KHOẢN KHÁCH HÀNG</div>
      <Row>
        <Col xs="12">
          <div className={cx("block-customer-login")}>
            <p>Khách hàng đã đăng ký</p>
            <p>
              Nếu bạn có một tài khoản, hãy đăng nhập bằng địa chỉ email của
              bạn.
            </p>
            <form
              className={cx("form-container")}
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef}
            >
              <div className={cx("label-name")}>Name</div>
              <input {...register("name")} type={"text"} />
              <p>{errors.name?.message}</p>

              <div className={cx("label-email")}>Email</div>
              <input {...register("email")} type={"text"} />
              <p>{errors.email?.message}</p>

              <div className={cx("label-password")}>Mật khẩu</div>
              <input {...register("password")} type={"password"} />
              <p>{errors.password?.message}</p>

              <div className={cx("label-password")}>Xác nhận mật khẩu</div>
              <input {...register("confirmPassword")} type={"password"} />
              <p>{errors.confirmPassword?.message}</p>

              <Button type="submit" className={cx("button-submit")}>
                <span className={cx("dang-nhap")}>Tạo tài khoản </span>
              </Button>
            </form>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
