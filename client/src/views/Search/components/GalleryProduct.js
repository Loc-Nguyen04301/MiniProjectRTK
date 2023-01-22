import React, { useState, useEffect, memo } from "react";
import ReactPaginate from "react-paginate";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "@/assets/styles/Home.module.scss";
import classNames from "classnames/bind";
import "@/assets/styles/GalleryProduct.scss";
let cx = classNames.bind(styles);

function Items({ currentProducts }) {
  return (
    <Row style={{ paddingTop: "40px" }}>
      {currentProducts &&
        currentProducts.map((product) => (
          <Col xs="4" key={product.id}>
            <div className={cx("box-product")}>
              <Link to={`/detail/${product.name}`}>
                <img src={product.img} alt="" />
              </Link>
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
  );
}

const GalleryProduct = ({ searchProducts, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(searchProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentProducts={currentItems} />
      <ReactPaginate
        nextLabel=" >"
        previousLabel="< "
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default memo(GalleryProduct);
