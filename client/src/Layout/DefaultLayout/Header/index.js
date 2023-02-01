import React from "react";
import styles from "@/assets/styles/Header.module.scss";
import classNames from "classnames/bind";

import HeaderTop from "./components/HeaderTop";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderBottom from "./components/HeaderBottom";

let cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </div>
  );
};

export default Header;
