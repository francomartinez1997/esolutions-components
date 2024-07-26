import React from 'react';
import { ButtonsContainer, CustomButton } from './CustomComponents.tsx';

const ButtonsBox = () => {
  return (
    <ButtonsContainer>
      <CustomButton size='small' variant="text" sx={{ color: "#004E8C" }} >Limpiar</CustomButton>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <CustomButton size='small' variant="text" sx={{ color: "#004E8C" }} >Cancelar</CustomButton>
        <CustomButton size='small' variant="contained" >Aplicar</CustomButton>
      </div>
    </ButtonsContainer>
  );
};

export default ButtonsBox;
