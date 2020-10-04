import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { AuthContext } from '../context';


export default Aluno = ( {navigation} ) => {
    const { signUp } = React.useContext(AuthContext)
    const [textEmail, setTextEmail] = React.useState('')
    const [textPassword, setTextPassword] = React.useState('')
    const [text, setText] = React.useState('')
  
    const handleSignUp = () => {
      Alert.alert ("Sucesso", "Aluno registrado!");
    };

    return (
      <View style={styles.container}>
         
        <View style={styles.view_fields}>
        <Text> Faça seu cadastro de aluno</Text>

        <TextInput
            placeholder="Seu nome"
            style={styles.input_auth}
            onChangeText={text => setText(text)}
            value={text}/>

        <TextInput
            placeholder="Sua matrícula"
            style={styles.input_auth}
            onChangeText={text => setText(text)}
            value={text}/>

        <TextInput
            placeholder="Soft Skills"
            style={styles.input_auth}
            onChangeText={text => setText(text)}
            value={text}/>

        <TextInput
            placeholder="Hard Skills"
            style={styles.input_auth}
            onChangeText={text => setText(text)}
            value={text}/>

          <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input_auth}
            onChangeText={text => setTextEmail(text)}
            value={textEmail} />
  
          <TextInput
            placeholder="Escolha uma senha"
            style={styles.input_auth}
            onChangeText={text => setTextPassword(text.toLowerCase())}
            value={textPassword} secureTextEntry={true} />
        </View>
        

        
        <Button title="Criar minha conta agora " onPress={() => handleSignUp()} />
        <Button title="Ir para a página de Login" onPress={() => { navigation.navigate ("HomeDetails") } }/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0,
      justifyContent: "center",
      alignItems: "center"
    },
    /*button: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    },*/
    input_auth: {
      borderColor: '#ccc',
      borderWidth: 1,
      flex: 0,
      borderRadius: 3,
      margin: 10,
      marginTop: 0,
      padding: 4,
      
    },
    view_fields: {
      flexDirection: 'column',
      width: '100%',
      height: '20%'
    }
  });