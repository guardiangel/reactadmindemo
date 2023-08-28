import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colorTokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Question Page" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h3">
            What is the demo for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4">
            This demo is for creating a admin app with light and dark mode, we
            can expand its functionality based on whatever needs
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
