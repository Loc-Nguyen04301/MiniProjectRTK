import React from "react";
import classNames from "classnames/bind";
import styles from "@/assets/styles/SideNav.module.scss";
import {
  faHome,
  faSignal,
  faGears,
  faCircleInfo,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SideNavItems from "./SideNavItems";
import { useNavigate } from "react-router-dom";

let cx = classNames.bind(styles);

const SideNav = () => {
  const navigate = useNavigate();

  const handleClick = (pathName) => {
    pathName.length !== 0
      ? navigate(`/dashboard/${pathName}`)
      : navigate(`/dashboard`);
  };

  return (
    <aside className={cx("side-nav")}>
      <div className={cx("sidenav-items")}>
        <img
          src="https://www.thol.com.vn/wp-content/uploads/2023/01/thol-logo.jpg"
          alt="logo"
          width={"150px"}
        />
        <div style={{ width: "150px" }} className={cx("group1")}>
          <SideNavItems
            icon={faHome}
            title={"Home"}
            handleClick={() => handleClick("")}
          />
          <SideNavItems
            icon={faSignal}
            title={"Statistic"}
            handleClick={() => handleClick("statistic")}
          />
          <SideNavItems
            icon={faPlus}
            title={"Add Product"}
            handleClick={() => handleClick("add-product")}
          />
          <SideNavItems
            icon={faList}
            title={"Products"}
            handleClick={() => handleClick("products")}
          />
          <SideNavItems icon={faGears} title={"Settings"} />
          <SideNavItems icon={faCircleInfo} title={"Help Center"} />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
