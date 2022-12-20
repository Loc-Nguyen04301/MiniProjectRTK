// send HTTP request

import http from "@/service/http-common";

const create = (data) => {
  return http.post("/product", data);
};

const getByName = (name) => {
  return http.get(`/product/${name}`);
};

const getByCategory = (category) => {
  return http.get(`/product/category/${category}`);
};

const getAll = () => {
  return http.get("/product");
};

const update = (id, data) => {
  return http.put(`/product/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/product/${id}`);
};

const removeAll = () => {
  return http.delete(`/product`);
};

const ProductService = {
  create,
  getByName,
  getByCategory,
  getAll,
  update,
  remove,
  removeAll,
};

export default ProductService;
