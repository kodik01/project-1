import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home_screen from './pages/home_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import profile_akun from './pages/profile'
import search_akun from './pages/search';
import nextHome from './pages/nextHome';
import login_screen from './pages/login';
import signup_screen from './pages/signup';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const mainapp =() =>{
  return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={home_screen} options={{headerShown: false}}/>
        <Tab.Screen name="nextHome" component={nextHome} options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}}/>
        <Tab.Screen name="search" component={search_akun} options={{headerShown: false}}/>
        <Tab.Screen name="profile" component={profile_akun} options={{headerShown: false} }/>
      </Tab.Navigator>
  )
} 
const App = () => {
  return (
    <NavigationContainer>
       
    <Stack.Navigator
      screenOptions={{
        headerShown: false,   
        animationEnabled: false
      }}>
      <Stack.Screen name="login" component={login_screen} options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}}/>
      <Stack.Screen name="signup" component={signup_screen} options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}}/>
      <Stack.Screen 
        name = "mainapp" 
        component={mainapp}
      />
    </Stack.Navigator> 
  </NavigationContainer>

  );
};

export default App;
