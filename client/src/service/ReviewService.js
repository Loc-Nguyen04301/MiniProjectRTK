import http from "@/service/http-common";

const create = (data) => {
  return http.post("/review", data);
};

const ReviewService = {
  create,
};

export default ReviewService;
