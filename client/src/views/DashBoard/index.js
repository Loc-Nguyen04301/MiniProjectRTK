import React from "react";
import HighchartsReact from "highcharts-react-official";
import Hightcharts from "highcharts";
import { Container } from "reactstrap";

const generateOptions = () => {
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
      pointFormat: "Lượng sản phẩm đã bán ra  : <b>{point.y:.1f} </b>",
    },
    series: [
      {
        name: "Số lượng sản sản phẩm",
        data: [
          ["Tokyo", 37.33],
          ["Delhi", 31.18],
          ["Shanghai", 27.79],
          ["Sao Paulo", 22.23],
          ["Mexico City", 21.91],
          ["Dhaka", 21.74],
          ["Cairo", 21.32],
          ["Beijing", 20.89],
          ["Mumbai", 20.67],
          ["Osaka", 19.11],
          ["Karachi", 16.45],
          ["Chongqing", 16.38],
          ["Istanbul", 15.41],
          ["Buenos Aires", 15.25],
          ["Kolkata", 14.974],
          ["Kinshasa", 14.97],
          ["Lagos", 14.86],
          ["Manila", 14.16],
          ["Tianjin", 13.79],
          ["Guangzhou", 13.64],
        ],
        dataLabels: {
          format: "{point.y:.1f}", // one decimal
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
  return (
    <Container style={{ padding: "50px 0" }}>
      <HighchartsReact highcharts={Hightcharts} options={generateOptions()} />
    </Container>
  );
};

export default DashBoard;
