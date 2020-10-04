import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../context';

export default SignIn = ( {navigation} )=>{
    const {SignIn} = React.useContext(AuthContext);
    const [textEmail, setTextEmail] = React.useState('')
    const [textPassword, setTextPassword] = React.useState('')

    return (
        <View style={styles.container}>
          <View style={styles.view_fields}>

          <Text>Acesse sua conta com seu login de Aluno ou Professor </Text>
            <TextInput
            placeholder="Digite seu e-mail"
              style={styles.input_auth}
              onChangeText={text => setTextEmail(text)}
              value={textEmail} />
    
            <TextInput
            placeholder="Digite sua senha"
              style={styles.input_auth}
              onChangeText={text => setTextPassword(text.toLowerCase())}
              value={textPassword} secureTextEntry={true} />


      </View>






      
    
          <Button title='Logar' onPress ={()=>{ SignIn() }}/>
          <Text>Nao tem conta? </Text>
          <Button title='Criar conta' onPress ={()=>{ navigation.push ("CreateAccount")}}/>
            
        </View>
      )
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
          borderRadius: 140,
          padding: 10
        },
        input_auth: {
          borderColor: '#ccc',
          borderWidth: 2,
          flex: 1,
          borderRadius: 100,
          margin: 10,
          marginTop: 10,
          padding: 10
        },
        view_fields: {
          flexDirection: 'column',
          width: '100%',
          height: 140
        }
      });