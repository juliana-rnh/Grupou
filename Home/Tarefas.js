import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function Tarefa({ tarefa, handleFinalizado }){
    return(
        <View style={styles.container}>
        {/* <Text style={styles.tarefa}>{descricao}</Text>*/}
        <Text style={styles.tarefa}>{tarefa.title}</Text>
        <TouchableOpacity 
        style={styles.botao}
        onPress={() => {handleFinalizado(tarefa.id)}}>

            <Text>Finalizado</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderBottomColor: "blue",
        borderBottomWidth: 1
    },
    tarefa: {
        flex:1
    },
    botao:{ backgroundColor:"#ccc",
    padding: 10,
    margin:5

    }
})