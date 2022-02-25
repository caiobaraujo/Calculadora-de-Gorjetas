import React, { useState } from 'react';
import styled from 'styled-components/native';
import lista from './src/components/lista';
import ListaItem from './src/components/listaItem';
import AddItemArea from './src/components/AddItemArea';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
  margin-top: 20px;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

export default function App(txt) {
  const [itens, setItens] = useState(lista);

  const addNewItem = (txt) => {
    let newItens = [...itens];
    newItens.push({
      id: uuidv4(),
      task: txt,
      done: false,
    });
    setItens(newItens);
  };

  const toggleDone = (index) => {
    let newItens = [...itens];
    newItens[index].done = !newItens[index].done;
    setItens(newItens);
  };

  const deleteItem = (index) => {
    let newItens = [...itens];
    newItens.splice(index, 1);
    setItens(newItens);
  };
  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={itens}
        renderItem={({ item, index }) => (
          <ListaItem onPress={() => toggleDone(index)} data={item} />
        )}
        renderHiddenItem={({ item, index }) => (
          <ListaItemSwipe onDelete={() => deleteItem(index)} />
        )}
        leftOpenValue={50}
        disableLeftSwipe={true}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
}
