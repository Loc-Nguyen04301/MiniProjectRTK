import React from "react";
import DataTable from "@/components/DataTable";
import { Container, Row } from "reactstrap";
import styles from "@/assets/styles/BankAccount.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const BankAccount = () => {
  return (
    <Container>
      <div className={cx("title-header")}>Bảng tính Calories các loại thực phẩm </div>
      <Row>
        <DataTable />
      </Row>
    </Container>
  );
};

export default BankAccount;
