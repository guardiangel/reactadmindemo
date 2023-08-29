import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeograpyHelper from "../../components/GeograpyHelper";
import { useTheme } from "@mui/material";
import { colorTokens } from "../../theme";

const GeograpyChart = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subTitle="Geography Chart" />
      <Box height="85vh" border={`1px solid ${colors.grey[100]}`}>
        <GeograpyHelper />
      </Box>
    </Box>
  );
};

export default GeograpyChart;
