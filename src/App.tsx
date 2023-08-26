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
import Bar from "./scenarios/bar/Bar";
import Form from "./scenarios/form/Form";
import Line from "./scenarios/line/Line";
import Pie from "./scenarios/pie/Pie";
import FAQ from "./scenarios/faq/FAQ";
import Geograpy from "./scenarios/geograpy/Geograpy";
import Calendar from "./scenarios/calendar/Calendar";
import { Route, Routes } from "react-router-dom";

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
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geograpy />} />
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
