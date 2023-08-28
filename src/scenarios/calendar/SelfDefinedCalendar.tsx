import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import CalendarApi, {
  Calendar,
  EventApi,
  formatDate,
} from "@fullcalendar/core";
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

  const handleDateClick = (selected: any) => {
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
      <Box display="flex" justifyContent="space-between">
        {/**calendar side bar */}
        {/**flex="1 1 20%" means grow, shrink, and width */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/**Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            //Don't use percentage or px because they don't work well
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            //https://fullcalendar.io/docs/headerToolbar
            headerToolbar={{
              //Spaces in the left and right attributes will affect the visual effect.Guiquansun20230828
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: any) => setCurrentEvents(events)}
            initialEvents={[
              { id: "123", title: "All-day event", date: "2023-08-28" },
              { id: "456", title: "Time event", date: "2023-08-29" },
            ]}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default SelfDefinedCalendar;
