import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import ProgressCircleDashboard from "./ProgressCircleDashboard";

interface StatBarDashboardMode {
  title: string;
  subtitle: string;
  icon: any;
  progress: string;
  increase: string;
}

const StatBarDashboard = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBarDashboardMode) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: colors.grey[100],
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircleDashboard progress={progress} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h4"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{
              color: colors.grey[100],
            }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default StatBarDashboard;
