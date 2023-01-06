import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductService from "@/service/ProductService";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";
import styles from "@/assets/styles/ListProductByCategory.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

let cx = classNames.bind(styles);

const ListProductByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const res = await ProductService.getByCategory(category);
        setProducts(res.data.products);
      };
      fetchingData();
    } catch (e) {
      console.log(e);
    }
  }, [category]);

  return (
    <Container>
      <div className={cx("breadcrumbs")}>
        <a href="/">
          <span className={cx("home")}>Trang chủ</span>
        </a>
        <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-4" />
        <span className={cx("about-me")}>{category}</span>
      </div>
      <Row>
        {products?.map((product) => (
          <Col xs="3" key={product.id}>
            <div className={cx("box-product")}>
              <Link to={`/detail/${product.name}`}>
                <img src={product.img} alt="" />
              </Link>
              <div className={cx("show-on-hover")}>
                <Link
                  to={`/detail/${product.name}`}
                  className={cx("text-show-one-hover")}
                >
                  Quick view
                </Link>
              </div>
              <h3>
                <Link
                  to={`/detail/${product.name}`}
                  className="text-center mt-3"
                >
                  {product.name}
                </Link>
              </h3>
              <div className="d-flex justify-content-center mt-5">
                <span className="price-container">
                  <span className={cx("price-wrapper")}>
                    <span className={cx("new-price")}>
                      {product.new_price.toLocaleString("vi")}₫
                    </span>
                    {product.old_price !== 0 && (
                      <span className={cx("old-price")}>
                        {product.old_price.toLocaleString("vi")}₫
                      </span>
                    )}
                  </span>
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListProductByCategory;
