import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context';

export default SignOut = ( {navigation} )=>{

    const {SignIn} = React.useContext(AuthContext);
    const [textEmail, setTextEmail] = React.useState('')
    const [textPassword, setTextPassword] = React.useState('')

    return (
        <View style={styles.container}>
          <View style={styles.view_fields}>
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    
            <TextInput
              style={styles.input_auth}
              onChangeText={text => setTextPassword(text.toLowerCase())}
              value={textPassword} secureTextEntry={true} />
          </View>
    
    
          <Button title='Criar conta' onPress ={()=>{ navigation.push ("CreateAccount")}}/>
            <Button title='Logar' onPress ={()=>{ SignIn() }}/>
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
      });