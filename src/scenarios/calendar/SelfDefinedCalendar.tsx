import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import CalendarApi, { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { colorTokens } from "../../theme";

const SelfDefinedCalendar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected: Calendar | any) => {
    console.log(selected);
    const title = prompt("Please input a title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (window.confirm(`Delete the event ${selected.event.title}?`)) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subTitle="Full Calendar Interative pages" />
      <Box display="felix" justifyContent="space-between"></Box>
    </Box>
  );
};

export default SelfDefinedCalendar;
