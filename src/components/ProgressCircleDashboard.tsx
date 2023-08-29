import React from "react";
import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../theme";

interface ProgressMode {
  progress?: string;
  size?: number;
}

const ProgressCircleDashboard = ({
  progress = "0.75",
  size = 40,
}: ProgressMode) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const angle = parseFloat(progress) * 360;

  return (
    <Box
      m="20px"
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 50%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};

export default ProgressCircleDashboard;
