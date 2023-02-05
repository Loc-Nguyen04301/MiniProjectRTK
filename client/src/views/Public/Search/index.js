import React, { useEffect, useState } from "react";
import ProductService from "@/service/ProductService";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/Search.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import GalleryProduct from "./components/GalleryProduct";

let cx = classNames.bind(styles);

const Search = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search: searchByName } = useParams();

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const res = await ProductService.getByName(searchByName);
        setSearchProducts(res.data.products);
        setLoading(false);
      };

      setTimeout(() => {
        fetchingData();
      }, 500);
      setLoading(true);
    } catch (e) {
      setLoading(true);
    }
  }, [searchByName]);

  return (
    <Container>
      <div className={cx("breadcrumbs")}>
        <a href="/">
          <span className={cx("home")}>Trang chủ</span>
        </a>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
        <span className={cx("about-me")}>
          KẾT QUẢ TÌM KIẾM: '{searchByName}'
        </span>
      </div>

      <Row style={{ paddingBottom: "80px" }}>
        <Col xs="3">
          <Link to="/">
            <img
              src="https://www.thol.com.vn/wp-content/uploads/2023/01/Whey-RSP-banner.jpg"
              alt="whey tăng cơ giảm mỡ thol"
            />
          </Link>
        </Col>
        {loading ? (
          <Col xs="9" className="text-center">
            <h1>Loading...</h1>
            <Spinner
              style={{
                height: "6rem",
                width: "6rem",
              }}
            ></Spinner>
          </Col>
        ) : !loading && searchProducts?.length > 0 ? (
          <Col xs="9">
            <h1 style={{ color: "var(--text-color)" }} className="ms-4">
              KẾT QUẢ TÌM KIẾM: '{searchByName}'
            </h1>
            <GalleryProduct searchProducts={searchProducts} itemsPerPage={6} />
          </Col>
        ) : (
          <Col xs="9">
            <h1 style={{ color: "var(--text-color)" }} className="ms-4">
              KẾT QUẢ TÌM KIẾM: '{searchByName}'
            </h1>
            <div className="alert alert-warning mt-5 ms-4">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                color={"#c07600"}
                size="lg"
                className="me-4"
              />
              Tìm kiếm của bạn không có kết quả.
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Search;
