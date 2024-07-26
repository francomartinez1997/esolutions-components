import { Box, Button } from '@mui/material';
import React from 'react';
import { 
  DescriptiveText, 
  InfoText, 
  MainText, 
  MediaContainer, 
  StepText, 
  StyledCard, 
  SubText, 
  TextContainer, 
  Triangle, 
  TriangleBox 
} from './CustomComponents.tsx';

const Popover = ({
  title,
  subtitle,
  info,
  description
}) => {
  return (
    <TriangleBox>
      <StyledCard>
        <TextContainer>
          <StepText>Paso 1 de 5</StepText>
        </TextContainer>
        <TextContainer>
          <MainText>{title}</MainText>
          <SubText>{subtitle}</SubText>
          <InfoText>{info}</InfoText>
        </TextContainer>
        <MediaContainer>
          <Box sx={{ width: '100%', height: '9rem', borderRadius: '5px', bgcolor: '#210b71' }} />
          <DescriptiveText>{description}</DescriptiveText>
        </MediaContainer>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: '32px',
          padding: '8px 0px 0px 0px',
          gap: '8px',
          width: '100%'

        }}>
          <Button variant="outlined" sx={{ color: '#7A8FA7', borderColor: '#7A8FA7' }}>Cancelar</Button>
          <Button variant="contained" >Aceptar</Button>
        </Box>
      </StyledCard>
      <Triangle />
    </TriangleBox>
  );
};

export default Popover;
