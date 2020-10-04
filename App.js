import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './context';


import Home from './Home';
import Profile from './Profile';
import Grupos from './Grupos';
import Chat from './Chat';
import HomeDetails from './Home/Details';
import SignIn from './SignIn';
import SignOut from './SignOut';
import CreateAccount from './CreateAccount';
import Aluno from './CreateAccount/aluno';
import Professor from './CreateAccount/professor';
import Disciplinas from './Disciplinas';
import Skills from './Skills';
import ALterar from './Alterar';
//import AcessoNegado from './AcessoNegado';
//import Aluno from './Aluno';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator(); 
const Drawer = createDrawerNavigator(); 

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
      <HomeStack.Navigator>
          <HomeStack.Screen name='Home' options={{ title: 'Home' }} component={Home} />
          <HomeStack.Screen name='HomeDetails' component={HomeDetails} />
      </HomeStack.Navigator>
)

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
<ProfileStack.Navigator>
 <ProfileStack.Screen name="Profile" component={Profile} />
</ProfileStack.Navigator>
)

const AlterarStack = createStackNavigator();
const AlterarStackScreen = () => (
<AlterarStack.Navigator>
 <AlterarStack.Screen name="Alterar Dados" component={Alterar} />
</AlterarStack.Navigator>
)

const SkillsStack = createStackNavigator();
const SkillsStackScreen = () => (
<SkillsStack.Navigator>
 <SkillsStack.Screen name="Skills" component={Skills} />
</SkillsStack.Navigator>
)



const GruposStack = createStackNavigator();
const GruposStackScreen = () => (
<GruposStack.Navigator>
 <GruposStack.Screen name="Grupos" component={Grupos} />
</GruposStack.Navigator>
)

const DisciplinasStack = createStackNavigator();
const DisciplinasStackScreen = () => (
<DisciplinasStack.Navigator>
 <DisciplinasStack.Screen name="Disciplinas" component={Disciplinas} />
</DisciplinasStack.Navigator>
)


const ChatStack = createStackNavigator();
const ChatStackScreen = () => (
<ChatStack.Navigator>
 <ChatStack.Screen name="Mensagens Privadas" component={Chat} />
</ChatStack.Navigator>
)


const TabsScreen = () => (
  <Tabs.Navigator>
  <Tabs.Screen name="Home" component={HomeStackScreen} />
  <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  <Tabs.Screen name="Grupos" component={GruposStackScreen} />
  <Tabs.Screen name="Chat" component={ChatStackScreen} />
  </Tabs.Navigator>
)

export default function App() {

  const [userToken, setUserToken] = React.useState(null); 
  const authContext = React.useMemo (() =>{

    return{
      SignIn: () => {setUserToken('sdf')},
      SignOut: () => {setUserToken('null')}
    }

  })

  return (
    <AuthContext.Provider value={authContext}> 

    <NavigationContainer>

      {userToken ?
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Alterar Dados" component={AlterarStackScreen} />
      <Drawer.Screen name="Skills" component={SkillsStackScreen} />
      <Drawer.Screen name="Disciplinas" component={DisciplinasStackScreen} />
      <Drawer.Screen name="Grupos" component={GruposStackScreen} />
      <Drawer.Screen name="Chat" component={ChatStackScreen} />
      </Drawer.Navigator> 

       :


      <AuthStack.Navigator>
          <AuthStack.Screen name='SignIn' options={{ title: 'Acessar' }} component={SignIn} />
          <AuthStack.Screen name='SignOut' options={{ title: 'Deslogar' }} component={SignOut} />
          <AuthStack.Screen name='Aluno' options={{ title: 'Bem vindo Aluno' }} component={Aluno} />
          <AuthStack.Screen name='Professor' options={{ title: 'Bem vindo Professor' }} component={Professor} />
          <AuthStack.Screen name='CreateAccount' component={CreateAccount} />
          
      </AuthStack.Navigator> 

      
      }
    </NavigationContainer>

    </AuthContext.Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
