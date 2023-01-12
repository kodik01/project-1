import React, {onPress, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Button, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import ikon1 from '../../asset/gambar_awal/beluga.jpg';
import {TextInput} from 'react-native-gesture-handler';
import { auth, db } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const login_screen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace("mainapp")
      }
    })

    return unsubscribe;
  }, [])

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)  => {
      const user = userCredentials.user;
      console.log(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          margin: 4,
          pading: 10,
        }}>
        log in
      </Text>

      <TextInput
        style={{padding: 10,borderWidth: 0.7,margin: 10}}
        placeholder="email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{padding: 10,borderWidth: 0.7,margin: 10}}
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={handleSignIn}
        style={{
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          margin: 15,
          padding: 0.5
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
            
          }}>
          sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.replace('signup')}
        style={{
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          margin: 15,
          padding: 0.5
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
            
          }}>
          sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default login_screen;
