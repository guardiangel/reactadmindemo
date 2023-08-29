import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChartHelper from "../../components/PieChartHelper";

const PieChart = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subTitle="Pie Chart" />
      <Box height="85vh">
        <PieChartHelper />
      </Box>
    </Box>
  );
};

export default PieChart;
