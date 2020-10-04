/*import React from 'react';
import { View, Text } from 'react-native';

export default HomeDetails = () => {
    return(
        <View>
            <Text>HomeDetails</Text>
        </View>
    )
}*/

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefas.js';


export default function App() {

  const [tarefas, setTarefas] = useState([
    {id: 1, title: 'fazer cafe'},
    {id: 2, title: 'tomar cafe'},
    {id: 3, title: 'lavar xicara'}
  ]);

  
  return (    
    <View style={styles.container}>
      {tarefas.map((tarefa) =>
      <Tarefa descricao={tarefa.title}/>
      )}
      <Text>Testando!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});