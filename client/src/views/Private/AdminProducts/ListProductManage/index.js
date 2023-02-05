import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  Row,
  Col,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "@/service/ProductService";

const Items = ({ currentItems }) => {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const toggleModalDelete = () => {
    setOpenModal((prev) => !prev);
  };

  const toggleModalAndRemoveProduct = async (id) => {
    await ProductService.remove(id);
    navigate(0);
  };

  return (
    <Row>
      {currentItems &&
        currentItems.map((product) => (
          <Col xs="12" lg="4" md="4" key={product.id}>
            <a
              href="true"
              style={{ fontSize: "30px", float: "right" }}
              onClick={toggleModalDelete}
            >
              x
            </a>
            <div className="d-flex flex-column align-items-center">
              <Link to={`/dashboard/products/detail/${product.name}`}>
                <img src={product.img} alt="detail-img" width={"150px"} />
              </Link>
              <h3>
                <Link
                  to={`/dashboard/products/detail/${product.name}`}
                  className="text-center mt-3"
                >
                  {product.name}
                </Link>
              </h3>
            </div>

            <Modal isOpen={openModal} toggle={toggleModalDelete}>
              <ModalHeader toggle={toggleModalDelete}></ModalHeader>
              <ModalBody>
                Bạn có chắc bạn muốn loại bỏ sản phẩm này ???
              </ModalBody>
              <ModalFooter>
                <Button
                  style={{
                    backgroundColor: "var(--primary-color)",
                    borderColor: "var(--primary-color)",
                  }}
                  onClick={() => toggleModalAndRemoveProduct(product.id)}
                >
                  Đồng ý
                </Button>
                <Button color="secondary" onClick={toggleModalDelete}>
                  Hủy bỏ
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        ))}
    </Row>
  );
};

const ListProductManage = ({ productList, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(productList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(productList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, productList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Items currentItems={currentItems} />
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
    </div>
  );
};

export default ListProductManage;
