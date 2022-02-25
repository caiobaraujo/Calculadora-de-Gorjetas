import React, { useState } from 'react';
import styled from 'styled-components/native';

const AddItemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
  margin-top: 10px;
`;

const AddInputArea = styled.TextInput`
  background-color: #fff;
  font-size: 18px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;

export default (props) => {
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    if (item.trim() != '') {
      props.onAdd(item.trim());
      setItem('');
    }
  };

  //  id: uuidv4()
  return (
    <AddItemArea>
      <AddInputArea
        placeholder="Digite alguma coisa"
        value={item}
        onChangeText={(e) => setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
      />
    </AddItemArea>
  );
};
