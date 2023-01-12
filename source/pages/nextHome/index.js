import {Text, View, Button, StyleSheet, Image, Pressable, ImageBackground} from 'react-native';
import React from 'react'
import closebutton from '../../asset/gambar_awal/closebutton.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const nextHome = ({ navigation,route }) => {
  const {gbr} = route.params;
  return (
    <View>
        <ImageBackground 
        source = {gbr}
        style={{width: 395, height: 700, alignItems:'flex-end'}} >
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image source = {closebutton} style={{width: 40, height: 40,margin: 5}}  />          
        </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

export default nextHome;