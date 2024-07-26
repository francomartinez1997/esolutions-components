import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import Header from './DatePickerHeader/Header.tsx';
import { StyledCard } from './CustomComponents.tsx';
import ButtonsBox from './ButtonsBox.tsx';

const DatePicker = () => {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
  const [selectedYear, setSelectedYear] = useState(dayjs().year());
  const [selectedDay, setSelectedDay] = useState(dayjs().date());
  const calendarValue = dayjs().month(selectedMonth).year(selectedYear).date(selectedDay);

  const onMonthChange = month => {
    if (month >= 0 && month < 12) {
      setSelectedMonth(month);
    }
  };

  const onYearChange = year => setSelectedYear(year);

  const onDateChange = date => {
    if (date) {
      setSelectedMonth(date.month());
      setSelectedYear(date.year());
      setSelectedDay(date.date());
    }
  };

  return (
    <StyledCard>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Header
            currentMonth={selectedMonth}
            currentYear={selectedYear}
            onMonthChange={onMonthChange}
            onYearChange={onYearChange}
          />
          <DateCalendar
            value={calendarValue}
            showDaysOutsideCurrentMonth
            disableHighlightToday
            onChange={onDateChange}
            sx={{
              width: '100%',
              height: '16rem',
              '& .MuiPickersCalendarHeader-root': {
                display: 'none',
              }
            }}
          />
        </Box>
      </LocalizationProvider>
      <ButtonsBox />
    </StyledCard>
  );
};

export default DatePicker;
