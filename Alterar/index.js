import React from 'react';
import { View, Button, Text } from 'react-native';

export default Alterar = ({navigation}) => {
    return(
        <View style={{padding: 100}}>
            <Text style ={{height: 40, alignItems: "center"}}>Escolha os dados que deseja alterar</Text>
            
            <Button title='E-mail' onPress ={()=>{ navigation.navigate ("") }}/>
            <Button title='Senha' onPress ={()=>{ navigation.navigate ("") }}/>
            <Button title='Descrição' onPress ={()=>{ navigation.navigate ("Descrição") }}/>
            
        </View>


    )
}