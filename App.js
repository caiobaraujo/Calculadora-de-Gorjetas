import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;

  align-items: center;
  margin-top: 30px;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #eee;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

const CalcButton = styled.Button`
  margin-top: 30px;
`;

const ResultArea = styled.View`
  width: 70%;

  background-color: #eee;
  border-radius: 10px;
  margin-top: 40px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItenTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 18px;
  margin-bottom: 30px;
`;

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [show, setShow] = useState(false);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip(nBill * 0.1);
      setShow(true);
    } else {
      alert('Please enter a bill amount');
    }
  };

  const calc2 = () => {
    setShow(false);
    setTip(0);
    setBill('');
  };

  const handleInput = (text) => {
    setBill(text);
  };

  return (
    <Page>
      <HeaderText>Calculadora de gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        keyboardType="numeric"
        value={bill}
        onChangeText={handleInput}
      />
      <CalcButton
        title={show ? 'Calcular novamente' : 'Calcular'}
        onPress={show ? calc2 : calc}
      />

      {show && (
        <ResultArea>
          <ResultItenTitle>Valor da conta</ResultItenTitle>
          <ResultItem>R$ {bill}</ResultItem>
          <ResultItenTitle>Valor da gorjeta</ResultItenTitle>
          <ResultItem>R$ {tip}</ResultItem>
          <ResultItenTitle>Valor Total</ResultItenTitle>
          <ResultItem>R$ {parseFloat(bill) + tip}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
}
