import React from 'react';
import styled from 'styled-components';
import { Feather } from 'react-native-vector-icons';

const ListaItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: #cc6666;
  justify-content: center;
`;

const ListaItemIcon = styled.View`
  margin-left: 10px;
`;

export default (props) => {
  return (
    <ListaItemSwipe onPress={props.onDelete} underlayColor="#ee7777">
      <ListaItemIcon>
        <Feather name="trash-2" size={30} color="#000" />
      </ListaItemIcon>
    </ListaItemSwipe>
  );
};
