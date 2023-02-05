import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Hightcharts from "highcharts";
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

const AdminStatistic = () => {
  const [customData, setCustomData] = useState();
  useEffect(() => {
    CustomerAndBillService.getAll().then((res) => setCustomData(res.data.data));
  }, []);

  return customData ? (
    <div className="vh-100 text-center">
      <HighchartsReact
        highcharts={Hightcharts}
        options={generateOptions(customData)}
      />
    </div>
  ) : (
    <></>
  );
};

export default AdminStatistic;
