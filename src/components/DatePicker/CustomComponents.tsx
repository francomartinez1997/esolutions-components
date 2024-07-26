import { Box, Button, Card, Select, styled } from "@mui/material";

export const StyledCard = styled(Card)({
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
});

export const ButtonsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 0.8rem 1rem 0.8rem',
  width: '100%',
  boxSizing: 'border-box',
  gap: '0.5rem'
});

export const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0.5rem 0 0.5rem'
});

export const CustomButton = styled(Button)({
  fontSize: '12px',
  width: "5rem",
  height: '1.5rem'
});

export const CustomSelect = styled(Select)({
  fontSize: '12px',
  fontWeight: 700,
  '& .MuiSelect-select': {
    padding: 0,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-icon': {
    color: '#000',
  },
});