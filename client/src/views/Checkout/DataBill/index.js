import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux/cart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { exportToCSV } from "@/features/ExportDataToExcel";
import CustomerAndBillService from "@/service/CustomerAndBillService";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
});

// Excel File Name Export data
const fileCustomName = "thongtinkhachhang";

const DataBill = () => {
  var cartItems = useSelector((state) => state.cart.cartItems);
  cartItems = cartItems.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    totalPrice: item.totalPrice,
  }));
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    //data
    if (totalAmount) {
      //create and save bill in DB
      CustomerAndBillService.create({ ...data, cartItems });
      //export data to EXCEL
      exportToCSV(
        [
          {
            Tên: data.name,
            Email: data.email,
            "Số điện thoại": data.phoneNumber,
            "Ngày mua hàng": new Date(),
          },
        ],
        fileCustomName
      );
      localStorage.removeItem("persist:cart");
      dispatch(resetCart());
      navigate(0);
    } else {
      alert(JSON.stringify([{ ...data }], null, 2));
    }
  };
  return (
    <>
      <h3 style={{ fontSize: "2.8rem", color: "#555" }}>
        Thông tin thanh toán
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="name"
          style={{ color: "#222", fontWeight: "700", fontSize: "2rem" }}
        >
          Tên *
        </label>
        <br />
        <input
          {...register("name")}
          placeholder="Tên bạn*"
          style={{
            border: "1px solid #ddd",
            boxShadow: "inset 0 1px 2px rgb(0 0 0 / 10%)",
            color: "#333",
            height: "40px",
            padding: "0 10px",
            width: "600px",
          }}
        />
        <p>{errors.name?.message}</p>

        <label
          htmlFor="email"
          style={{ color: "#222", fontWeight: "700", fontSize: "2rem" }}
        >
          Địa chỉ Email *
        </label>
        <br />
        <input
          {...register("email")}
          placeholder="Địa chỉ Email*"
          style={{
            border: "1px solid #ddd",
            boxShadow: "inset 0 1px 2px rgb(0 0 0 / 10%)",
            color: "#333",
            height: "40px",
            padding: "0 10px",
            width: "600px",
          }}
        />
        <p>{errors.email?.message}</p>

        <label
          htmlFor="phoneNumber"
          style={{ color: "#222", fontWeight: "700", fontSize: "2rem" }}
        >
          Số điện thoại *
        </label>
        <br />
        <input
          {...register("phoneNumber")}
          placeholder="Số điện thoại"
          style={{
            border: "1px solid #ddd",
            boxShadow: "inset 0 1px 2px rgb(0 0 0 / 10%)",
            color: "#333",
            height: "40px",
            padding: "0 10px",
            width: "600px",
          }}
        />
        <p>{errors.phoneNumber?.message}</p>

        <label
          htmlFor="note"
          style={{ color: "#222", fontWeight: "700", fontSize: "2rem" }}
        >
          Ghi chú
        </label>
        <br />
        <textarea
          {...register("note")}
          placeholder="Ghi chú"
          style={{
            border: "1px solid #ddd",
            boxShadow: "inset 0 1px 2px rgb(0 0 0 / 10%)",
            color: "#333",
            height: "100px",
            padding: "0 10px",
            width: "600px",
          }}
        />
        <p>{errors.note?.message}</p>
        <Button type="submit" color="danger" style={{ fontSize: "2rem" }}>
          THANH TOÁN
        </Button>
      </form>
    </>
  );
};

export default DataBill;
