import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context';


    
export default CreateAccount = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={styles.container}>
            <Text>Você é aluno ou Professor?</Text>
            
            <Button title='ALUNO' onPress ={()=>{ navigation.push ("Aluno")}}/> 
            <Button title='PROFESSOR' onPress ={()=>{ navigation.push ("Professor") }}/>
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function Aluno() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>BEM VINDO ALUNO</Text>
      </View>
    );
  }
  
  function Professor() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>BEM VINDO TEACHER</Text>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 10
    },
    input_auth: {
      borderColor: '#ccc',
      borderWidth: 3,
      flex: 1,
      borderRadius: 10,
      margin: 10,
      marginTop: 0,
      padding: 4
    },
    view_fields: {
      flexDirection: 'column',
      width: '100%',
      height: 100
    }
  })
