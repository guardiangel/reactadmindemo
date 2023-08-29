import React from "react";
import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenarios/global/TopBar";
import SidebarMenu from "./scenarios/global/SidebarMenu";
import Dashboard from "./scenarios/dashboard/Dashboard";
import Team from "./scenarios/team/Team";
import Invoices from "./scenarios/invoices/Invoices";
import Contacts from "./scenarios/contacts/Contacts";
import Form from "./scenarios/form/UserForm";
import BarChart from "./scenarios/bar/BarChart";
import PieChart from "./scenarios/pie/PieChart";
import FAQ from "./scenarios/faq/FAQ";
import GeograpyChart from "./scenarios/geograpy/GeograpyChart";
import Calendar from "./scenarios/calendar/SelfDefinedCalendar";
import { Route, Routes } from "react-router-dom";
import LineChart from "./scenarios/line/LineChart";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <SidebarMenu />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invocies" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<BarChart />} />
                <Route path="/pie" element={<PieChart />} />
                <Route path="/line" element={<LineChart />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<GeograpyChart />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
