import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarchartHelper from "./BarChartHelper";

const BarChart = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Bar Chart" />
      <Box height="85vh">
        <BarchartHelper />
      </Box>
    </Box>
  );
};

export default BarChart;
