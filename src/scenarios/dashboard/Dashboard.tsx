import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import StatBarDashboard from "../../components/StatBarDashboard";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LIneChartHelper from "../../components/LIneChartHelper";
import GeograpyHelper from "../../components/GeograpyHelper";
import BarchartHelper from "../../components/BarChartHelper";
import ProgressCircleDashboard from "../../components/ProgressCircleDashboard";
import LineChart from "../line/LineChart";
import { mockTransactions } from "../../data/userData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="200px"
        gap="20px"
      >
        {/* first row */}
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBarDashboard
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBarDashboard
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBarDashboard
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBarDashboard
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/** Second row  begin*/}
        <Box gridColumn="span 8" gridRow="span 2" bgcolor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Profit Generated
              </Typography>{" "}
              <Typography
                variant="h5"
                fontWeight="500"
                color={colors.grey[200]}
              >
                $88,783,62
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[400],
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          {/**Line chart */}
          <Box height="280px" mt="-20px">
            <LIneChartHelper isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5">
              Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[400]} variant="h5">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Box color={colors.grey[100]}>{transaction.date}</Box>

              <Box
                bgcolor={colors.greenAccent[500]}
                padding="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/** Second row  end*/}

        {/**Third row begin */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={500}>
            Compaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircleDashboard size={125} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $87,235 profit generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          sx={{ p: "30px 30px 0 30px" }}
        >
          <Typography variant="h5" fontWeight={500}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarchartHelper isDashBoard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          sx={{ p: "30px 30px 0 30px" }}
          p="30px"
        >
          <Typography variant="h5" fontWeight={500}>
            Geograpyy Based Traffic
          </Typography>
          <Box height="200px" mt="-20px">
            <GeograpyHelper isDashBoard={true} />
          </Box>
        </Box>

        {/**Third row end */}
      </Box>
    </Box>
  );
};

export default Dashboard;
