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

const TipArea = styled.View`
  width: 85%;

  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  flex-direction: row;
  margin: 30px;
`;

const Tip = styled.Button`
  font-size: 20px;
  color: #3333ff;
`;

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      if (pct === 5) {
        setTip(nBill * 0.1);
      } else if (pct === 10) {
        setTip(nBill * 0.1);
      } else if (pct === 15) {
        setTip(nBill * 0.15);
      } else if (pct === 20) {
        setTip(nBill * 0.2);
      }

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
      <HeaderText>Calculadora de gorjetaaa</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        keyboardType="numeric"
        value={bill}
        onChangeText={handleInput}
      />
      <TipArea>
        <Tip title="5%" onPress={() => setPct(5)}></Tip>
        <Tip title="10%" onPress={() => setPct(10)}></Tip>
        <Tip title="15%" onPress={() => setPct(15)}></Tip>
        <Tip title="20%" onPress={() => setPct(20)}></Tip>
      </TipArea>
      <CalcButton
        title={show ? 'Calcular novamente' : `Calcular ${pct}%`}
        onPress={show ? calc2 : calc}
      />

      {show && (
        <ResultArea>
          <ResultItenTitle>Valor da conta</ResultItenTitle>
          <ResultItem>R$ {bill}</ResultItem>
          <ResultItenTitle>Valor da gorjeta</ResultItenTitle>
          <ResultItem>
            R$ {tip} ({pct} %)
          </ResultItem>
          <ResultItenTitle>Valor Total</ResultItenTitle>
          <ResultItem>R$ {parseFloat(bill) + tip}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
}
