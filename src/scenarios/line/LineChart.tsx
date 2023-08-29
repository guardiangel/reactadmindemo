import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LIneChartHelper from "../../components/LIneChartHelper";

const LineChart = () => {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subTitle="Line Chart" />
      <Box height="85vh">
        <LIneChartHelper />
      </Box>
    </Box>
  );
};

export default LineChart;
