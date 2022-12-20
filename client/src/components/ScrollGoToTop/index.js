import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

const ScrollGoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toogleVisible = () => {
      window.scrollY > 700 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toogleVisible);

    return () => {
      window.removeEventListener("scroll", toogleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "10px",
        left: "50%",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: visible ? "inline" : "none",
      }}
    >
      <FontAwesomeIcon icon={faArrowAltCircleUp} size="4x" />
    </Button>
  );
};

export default ScrollGoToTop;
