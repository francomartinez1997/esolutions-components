import { Box, Card, styled, Typography } from "@mui/material";
import theme from "../../theme";

export const TriangleBox = styled(Box)({
  position: 'relative',
  width: 'fit-content',
  margin: '20px'
});

export const StyledCard = styled(Card)({
  width: '18rem',
  boxShadow: '0 8px 20px 0 #00000050',
  borderRadius: '8px',
  padding: '1.75rem 2.1rem 1.75rem 2.1rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',
  position: 'relative',
  backgroundColor: '#FFFFFF',
});

export const Triangle = styled(Box)({
  position: 'absolute',
  width: '0',
  height: '0',
  borderStyle: 'solid',
  borderWidth: '1.5rem 1.5rem 1.5rem 0',
  borderColor: 'transparent #FFFFFF transparent transparent',
  top: '15%',
  left: '-1.5rem',
  transform: 'translateY(-50%)',
  zIndex: '1',
});


export const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
});

export const MediaContainer = styled(Box)({
  gap: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});


export const StepText = styled(Typography)({
  color: theme.palette.primary.main,
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '18px',
  letterSpacing: '0.25px',
  textAlign: 'left',
});

export const MainText = styled(Typography)({
  fontSize: '20px',
  lineHeight: '22px',
  textAlign: 'left',
  fontWeight: 800
});

export const SubText = styled(Typography)({
  fontSize: '15px',
  lineHeight: '22px',
  textAlign: 'left',
  fontWeight: 400
});

export const InfoText = styled(Typography)({
  color: theme.palette.primary.main,
  fontSize: '12px',
  lineHeight: '22px',
  textAlign: 'left',
  fontWeight: 600,
  cursor: 'pointer'
});

export const DescriptiveText = styled(Typography)({
  fontSize: '12px',
  lineHeight: '15px',
  textAlign: 'left',
  fontWeight: 300,
});

