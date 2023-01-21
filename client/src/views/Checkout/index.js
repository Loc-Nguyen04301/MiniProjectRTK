import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DataBill from "./DataBill";

const Checkout = () => {
  return (
    <Container style={{ paddingBottom: "50px" }}>
      <Nav
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.8rem",
          padding: "50px 0",
        }}
      >
        <NavItem>
          <NavLink active href="/gio-hang">
            SHOPPING CART
          </NavLink>
        </NavItem>
        <NavItem>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xs"
            className="mx-4 mt-3"
          />
        </NavItem>
        <NavItem>
          <NavLink href="/thanh-toan">CHECKOUT DETAILS</NavLink>
        </NavItem>
      </Nav>
      <Row>
        <Col xs="7" style={{ paddingTop: "50px", borderTop: "2px solid #ddd" }}>
          <DataBill />
        </Col>
        <Col xs="5"></Col>
      </Row>
    </Container>
  );
};

export default Checkout;
