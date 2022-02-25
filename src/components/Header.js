import React from 'react';

import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  width: 100%;
  height: 60px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  color: #000;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderText>Oláaa mundo!</HeaderText>
    </HeaderContainer>
  );
}
