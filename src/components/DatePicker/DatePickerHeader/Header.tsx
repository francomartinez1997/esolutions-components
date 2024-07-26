import React from 'react';
import { Box, IconButton, MenuItem } from '@mui/material';
import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { CustomSelect, HeaderContainer } from '../CustomComponents.tsx';

const getYears = (startYear = 2000) => {
  const endYear: number = new Date().getFullYear();
  const years: number[] = [];
  for (let year = startYear; year <= endYear + 1; year++) {
    years.push(year);
  }
  return years;
};

const months: string[] = [];
for (let i = 0; i < 12; i++) { months.push(dayjs().month(i).format('MMM')) }

const Header = ({ currentMonth, currentYear, onMonthChange, onYearChange }) => (
  <HeaderContainer>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={() => onMonthChange(currentMonth - 1)} disabled={currentMonth === 0}>
        <ArrowLeftIcon />
      </IconButton>
      <CustomSelect
        value={currentMonth}
        onChange={(e) => onMonthChange(e.target.value)}
      >
        {months.map((month, index) => (
          <MenuItem key={month} value={index}>
            {month}
          </MenuItem>
        ))}
      </CustomSelect>
      <IconButton onClick={() => onMonthChange(currentMonth + 1)} disabled={currentMonth === 11}>
        <ArrowRightIcon />
      </IconButton>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={() => onYearChange(currentYear - 1)}>
        <ArrowLeftIcon />
      </IconButton>
      <CustomSelect
        value={currentYear}
        onChange={(e) => onYearChange(e.target.value)}
      >
        {getYears().map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </CustomSelect>
      <IconButton onClick={() => onYearChange(currentYear + 1)}>
        <ArrowRightIcon />
      </IconButton>
    </Box>
  </HeaderContainer>
);

export default Header;