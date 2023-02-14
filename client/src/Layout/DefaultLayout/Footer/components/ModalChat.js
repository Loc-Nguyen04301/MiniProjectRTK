import React from "react";
import styles from "@/assets/styles/ModalChat.module.scss";
import classNames from "classnames/bind";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faMinus } from "@fortawesome/free-solid-svg-icons";

let cx = classNames.bind(styles);

const ModalChat = ({ setOpenModal }) => {
  const handleOpenMessageBox = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div className={cx("modal-container")}>
      <div className="m-5 d-flex justify-content-between">
        <img
          className={cx("_a3jx img")}
          src="https://annguyensupp.vn/wp-content/uploads/2021/06/9106021_1798134910323287_3876643000402575360_n.jpg"
          alt=""
          width={"48px"}
          height={"48px"}
          style={{ borderRadius: "50%" }}
        />
        <div>
          <FontAwesomeIcon
            icon={faEllipsis}
            className={cx("fontawesome-icon")}
          />
          <FontAwesomeIcon
            icon={faMinus}
            className={cx("fontawesome-icon")}
            onClick={handleOpenMessageBox}
          />
        </div>
      </div>
      <div className="m-5">
        <strong
          style={{ fontWeight: "600", color: "#222", fontSize: "2.6rem" }}
          className="m-2"
        >
          Chat với THOL Gym
        </strong>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          fill="#1b77f2"
          style={{ position: "relative", top: "-5px" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.81832 12.3781C0.641541 13.6853 0.172694 15.2929 0.740548 16.6638C1.3084 18.0347 2.77666 18.8399 4.53307 18.9322C4.81971 18.9472 5.05279 19.1803 5.06784 19.4669C5.16003 21.2234 5.96524 22.6916 7.33617 23.2595C8.7071 23.8273 10.3147 23.3585 11.6219 22.1817C11.8352 21.9896 12.1648 21.9896 12.3782 22.1817C13.6853 23.3585 15.2929 23.8273 16.6638 23.2595C18.0347 22.6916 18.84 21.2234 18.9322 19.467C18.9472 19.1803 19.1803 18.9472 19.4669 18.9322C21.2234 18.84 22.6916 18.0348 23.2595 16.6639C23.8273 15.2929 23.3585 13.6853 22.1817 12.3782C21.9896 12.1648 21.9896 11.8352 22.1817 11.6219C23.3585 10.3147 23.8273 8.70712 23.2595 7.33619C22.6916 5.96526 21.2233 5.16005 19.4669 5.06786C19.1803 5.05281 18.9472 4.81973 18.9321 4.53309C18.8399 2.77665 18.0347 1.30838 16.6638 0.740519C15.2929 0.172663 13.6853 0.641513 12.3781 1.8183C12.1648 2.01034 11.8352 2.01034 11.6218 1.8183C10.3147 0.641545 8.7071 0.172712 7.33619 0.74056C5.96527 1.30841 5.16006 2.77667 5.06785 4.53308C5.05281 4.81972 4.81972 5.0528 4.53308 5.06784C2.77665 5.16004 1.30838 5.96524 0.740519 7.33617C0.17266 8.7071 0.641519 10.3147 1.81831 11.6219C2.01036 11.8352 2.01036 12.1648 1.81832 12.3781ZM17.3648 8.00218C17.6421 7.52457 17.4797 6.91258 17.0021 6.63525C16.5245 6.35793 15.9125 6.5203 15.6352 6.99791L11.2253 14.5927C11.1429 14.7347 10.9484 14.76 10.8323 14.644L8.20711 12.0187C7.81658 11.6282 7.18342 11.6282 6.79289 12.0187C6.40237 12.4093 6.40237 13.0424 6.79289 13.433L10.5671 17.2071C10.7866 17.4267 11.0956 17.5318 11.4035 17.4916C11.7113 17.4515 11.9831 17.2707 12.139 17.0022L17.3648 8.00218Z"
          ></path>
        </svg>
      </div>
      <span style={{ fontSize: "2rem", margin: "30px" }}>
        Bạn cần hỗ trợ gì không ạ
      </span>
      <Button color="primary" className={cx("button-start")}>
        <span className={cx("button-text")}>Bắt đầu chat</span>
      </Button>
    </div>
  );
};

export default ModalChat;
