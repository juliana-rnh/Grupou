import React from 'react';
import { View, Text, Button } from 'react-native';

import {AuthContext} from '../context';

export default Home = ({navigation}) => {

    
    const {SignOut} = React.useContext(AuthContext);
    return(
        <View style={{padding: 100}}>
            <Text style ={{height: 40, alignItems: "center"}}>Esta é sua página inicial logado.</Text>
            
            <Button title='Ver tarefas Pendentes' onPress ={()=>{ navigation.push ("HomeDetails")}}/> 
            <Button title='Preencher Skills' onPress ={()=>{ navigation.push ("HomeDetails")}}/> 
            <Button title='Sair' onPress ={()=>{ navigation.push ("SignOut") }}/>
        </View>


    )
}