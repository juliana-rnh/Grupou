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
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native';
import Tarefa from './Tarefas.js';


export default function App() {

  const [tarefas, setTarefas] = useState([
    
    {id: 1, title: 'Associar Aluno XPTO'},
    {id: 2, title: 'Avaliar Questão XPTO'},
    {id: 3, title: 'Cadastrar Trabalho da turma XPTO'}
    
  ]);
  /*const [estaCarregando, setEstaCarregando] = useState(true)
   
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response=>response.json())
      .then(json=>{
        const limit_tarefas = json.splice(0,15)
        setTarefas(limit_tarefas)
        }).finally(()=>{
          setEstaCarregando(false)
        })
    },[])
  */

  function handleFinalizado(tarefaId){
    //alert(`id: ${tarefaId}`)
    const tarefas_pendentes = tarefas.filter(({id}) => {
      return id != tarefaId
    })
      
      setTarefas(tarefas_pendentes)
  }
  
  return (  
    <View style={styles.container}>
     {/*
      { tarefas ?
    <ActivityIndicator size="large" color="#0000ff" /> 
    
     :
     */}
      
    <ScrollView>
      {tarefas.map((tarefa) =>
      <Tarefa 
      key ={tarefa.id}
      tarefa={tarefa}
      //descricao={tarefa.title}
      handleFinalizado={handleFinalizado}/>
      )}
      <Text>Testando!</Text>
      <StatusBar style="auto" />
    </ScrollView>

     {/*} } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});