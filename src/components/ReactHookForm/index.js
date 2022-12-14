import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "reactstrap";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  message: yup.string().required(),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Tên bạn*" width={""} />
      <p>{errors.name?.message}</p>

      <input {...register("email")} placeholder="Địa chỉ Email*" width={""} />
      <p>{errors.email?.message}</p>

      <input
        {...register("phoneNumber")}
        placeholder="Số điện thoại"
        width={""}
      />
      <p>{errors.phoneNumber?.message}</p>

      <input {...register("message")} placeholder="Message*" width={""} />
      <p>{errors.message?.message}</p>

      <button type="submit" className="btn btn-secondary">
        Gửi lời nhắn
      </button>
    </form>
  );
};

export default ReactHookForm;
