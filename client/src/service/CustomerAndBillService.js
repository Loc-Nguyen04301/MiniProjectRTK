// send HTTP request

import http from "@/service/http-common";

const create = (data) => {
  return http.post("/customerAndBill", data);
};

const getAll = () => {
  return http.get("/customerAndBill");
};

const CustomerAndBillService = {
  create,
  getAll,
};

export default CustomerAndBillService;
