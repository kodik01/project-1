import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home_screen from './pages/home_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import profile_akun from './pages/profile'
import search_akun from './pages/search';

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


const App = () => {
  return (
    <NavigationContainer independent={true}>
       <Tab.Navigator>
        <Tab.Screen name="Home" component={home_screen} options={{headerShown: false}}/>
        <Tab.Screen name="search" component={search_akun} options={{headerShown: false}}/>
        <Tab.Screen name="profile" component={profile_akun} options={{headerShown: false}}/>

      </Tab.Navigator>
    {/* <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false
      }}>
      <Stack.Screen 
        name = "home_screen" 
        component={home_screen}
      />
    </Stack.Navigator> */}
  </NavigationContainer>

  );
};

export default App;
