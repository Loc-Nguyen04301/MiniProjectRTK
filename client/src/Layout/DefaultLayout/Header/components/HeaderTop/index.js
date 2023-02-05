import React from "react";
import styles from "@/assets/styles/Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { resetCart } from "@/redux/cart";
import { logoutAccount } from "@/redux/auth";
import { Container } from "reactstrap";
import { adminName } from "@/assets/data/AdminAccount";

let cx = classNames.bind(styles);

const HeaderTop = () => {
  const userName = useSelector((state) => state.auth.userName);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("persist:cart");
    dispatch(resetCart());
    dispatch(logoutAccount());
  };

  return (
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
        {userName && userName !== adminName ? (
          <div className={cx("right")}>
            <span>
              <FontAwesomeIcon className="px-2" icon={faUser} size={"lg"} />
              Hello, {userName}
            </span>
            <span className={cx("log-out")} onClick={handleSignOut}>
              <a href="/">Đăng xuất</a>
            </span>
          </div>
        ) : userName === adminName ? (
          <div className={cx("right")}>
            <span>
              <FontAwesomeIcon className="px-2" icon={faUser} size={"lg"} />
              Hello, {userName}
            </span>
            <span className={cx("log-out")} onClick={handleSignOut}>
              <a href="/">Đăng xuất</a>
            </span>
            <span className={cx("log-out")}>
              <a href="/dashboard">Trang quản trị </a>
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
  );
};

export default HeaderTop;
