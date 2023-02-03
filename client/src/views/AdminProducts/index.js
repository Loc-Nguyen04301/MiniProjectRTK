import React from "react";
import { useSelector } from "react-redux";
import ListProductManage from "./ListProductManage";

const AdminProducts = () => {
  const productList = useSelector((state) => state.product);
  return (
    <div style={{ padding: "50px" }} className="vh-100">
      <ListProductManage productList={productList} itemsPerPage={6} />
    </div>
  );
};

export default AdminProducts;
