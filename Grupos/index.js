import React from 'react';
import { View, Button, Text } from 'react-native';

export default Grupos = ({navigation}) => {
    return(
        <View style={{padding: 100}}>
            <Text style ={{height: 40, alignItems: "center"}}>Esta é a página de Grupos do Professor logado.</Text>
            
            <Button title='Associar Disciplinas' onPress ={()=>{ navigation.navigate ("CadastrarTrabalho") }}/>
            <Button title='Cadastrar Trabalho' onPress ={()=>{ navigation.navigate ("CadastrarTrabalho") }}/>
            <Button title='Questões de Skills' onPress ={()=>{ navigation.navigate ("CadastrarTrabalho") }}/>
            <Button title='Avaliações' onPress ={()=>{ navigation.navigate ("CadastrarTrabalho") }}/>
            
        </View>

    )
}