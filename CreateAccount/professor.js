import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { AuthContext } from '../context';

export default Professor = ( {navigation} ) => {
    const { signUp } = React.useContext(AuthContext)
    const [textEmail, setTextEmail] = React.useState('')
    const [textPassword, setTextPassword] = React.useState('')
  
    const handleSignUp = () => {
      alert("Eu vou te registrar");
    };

    return (
      <View style={styles.container}>
        <View style={styles.view_fields}>
        <Text> Você é aluno ou professor?</Text>

          <TextInput
            style={styles.input_auth}
            onChangeText={text => setTextEmail(text)}
            value={textEmail} />
  
          <TextInput
            style={styles.input_auth}
            onChangeText={text => setTextPassword(text.toLowerCase())}
            value={textPassword} secureTextEntry={true} />
        </View>
        <Button title="Criar minha conta agora handleSignup" onPress={() => handleSignUp()} />
        <Button title="Criar minha conta agoraoutra pagina" onPress={() => { navigation.push ("HomeDetails") } }/>
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
      borderRadius: 5
    },
    input_auth: {
      borderColor: '#ccc',
      borderWidth: 1,
      flex: 1,
      borderRadius: 3,
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