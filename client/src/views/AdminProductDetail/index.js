import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "@/service/ProductService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import productCategoryList from "@/assets/data/productCategoryList";

import classNames from "classnames/bind";
import styles from "./../AdminAddProduct/AdminAddProduct.module.scss";

let cx = classNames.bind(styles);

const AdminProductDetail = () => {
  const { name } = useParams();
  const [currentProduct, setCurrentProduct] = useState();
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchingData = async () => {
      const res = await ProductService.getByName(name);
      console.log(res.data.products);
      setCurrentProduct(res.data.products[0]);
    };
    fetchingData();
  }, [name]);

  useEffect(() => {
    currentProduct && setImage(currentProduct.img);
  }, [currentProduct]);

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    const imageBase64 = await convertFileToBase64(file);
    setImage(imageBase64);
  };

  const onSubmit = async (data) => {
    try {
      const res = await ProductService.update(currentProduct.id, {
        ...data,
        image,
      });
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
          navigate(`/dashboard/products/detail/${data.name}`);
          navigate(0);
      }, 4200);
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        autoClose: 3000,
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
    <>
      {currentProduct ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "80px 0" }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cx("form-create-product")}
          >
            <div className="form-group">
              <label htmlFor="name">Id</label>
              <input
                value={currentProduct.id}
                disabled
                style={{ backgroundColor: "#cdcdcd" }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                {...register("name", { required: true })}
                defaultValue={currentProduct.name}
              />
              {errors?.name?.type === "required" && <p>Name is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                {...register("description", { required: true })}
                defaultValue={currentProduct.description}
              />
              {errors?.description?.type === "required" && (
                <p>Description is required</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="old_price">Old Price</label>
              <input
                {...register("old_price", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Please enter a number",
                  },
                })}
                defaultValue={currentProduct.old_price}
              />
              {errors?.old_price?.type === "required" && (
                <p>Old Price is required</p>
              )}
              {errors?.old_price?.type === "pattern" && (
                <p>Old Price is number</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="new_price">New Price</label>
              <input
                {...register("new_price", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Please enter a number",
                  },
                })}
                defaultValue={currentProduct.new_price}
              />
              {errors?.new_price?.type === "required" && (
                <p>New Price is required</p>
              )}
              {errors?.new_price?.type === "pattern" && (
                <p>New Price is number</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <div>
                <select
                  id="category"
                  name="category"
                  {...register("category")}
                  defaultValue={currentProduct.category}
                >
                  {productCategoryList.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Upload Product Image</label>
              <input type="file" name="img" onChange={handleChangeImage} />
              {image && <p>Please Upload Image</p>}
            </div>
            {image && (
              <div
                className="text-center"
                style={{ margin: " 20px 0px", backgroundColor: "white" }}
              >
                <img src={image} alt="preview" width={"300px"} />
              </div>
            )}

            <div className="text-center">
              <input type="submit" value={"Update"} />
            </div>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={3000}
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
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminProductDetail;
