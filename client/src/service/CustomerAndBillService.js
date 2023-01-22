// send HTTP request

import http from "@/service/http-common";

const create = (data) => {
  return http.post("/customer", data);
};

const getAll = () => {
  return http.get("/customer");
};

const CustomerAndBillService = {
  create,
  getAll,
};

export default CustomerAndBillService;
