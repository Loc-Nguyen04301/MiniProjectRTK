import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Hightcharts from "highcharts";
import { Container } from "reactstrap";
import CustomerAndBillService from "@/service/CustomerAndBillService";

const generateOptions = (data) => {
  const dataChart = data.map((item) => {
    return [item.productName, Number(item.quantity)];
  });

  const total = data.reduce((total, item) => {
    return total + Number(item.totalprice);
  }, 0);

  return {
    chart: {
      type: "column",
    },
    title: {
      text: "Thống kê sản phẩm ",
      style: {
        fontSize: "30px",
        fontFamily: "Verdana, sans-serif",
      },
    },
    subtitle: {
      text: `Tổng doanh thu: ${total.toLocaleString("vi")}₫`,
    },
    xAxis: {
      type: "category",
      labels: {
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Số lượng",
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: "Lượng sản phẩm đã bán ra  : <b>{point.y} </b>",
    },
    series: [
      {
        name: "Số lượng sản sản phẩm",
        data: dataChart,
        dataLabels: {
          y: 0,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };
};

const DashBoard = () => {
  const [customData, setCustomData] = useState();
  useEffect(() => {
    CustomerAndBillService.getAll().then((res) => setCustomData(res.data.data));
  }, []);

  return customData ? (
    <Container style={{ padding: "50px 0" }}>
      <HighchartsReact
        highcharts={Hightcharts}
        options={generateOptions(customData)}
      />
    </Container>
  ) : (
    <></>
  );
};

export default DashBoard;
