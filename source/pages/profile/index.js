import React, {onPress} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Button, StyleSheet, Image, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const profile_akun = () => {
    return (
        <View>

            <View style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 10,
            }}>
          <Image 
            source={require('../../asset/gambar_awal/beluga.jpg')}
            style={{width: 168, height: 168,margin: 10,borderRadius: 1000}} />

        <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                margin: 1
                
         }}>
                belunga
            </Text>
        <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                margin: 4,
                pading: 10
         }}>
                bandung,west java
            </Text>
         <Pressable style={{
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 100,
              backgroundColor:'black'
              }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'normal',
                color:'white'
            }}>
                edit profile
                </Text>
              </Pressable>
          </View>

          <ScrollView>
          <Text style={{
                fontSize: 20,
                fontWeight: 'normal',
            }}>
                craft
            </Text>

              <View style={{
                flex:1,
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                margin: 10,
                flexDirection:'row'
          }}>

               <View>
               <Image 
              source={require('../../asset/gambar_awal/hihihi.jpg')}
              style={{width: 167, height: 220,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/nime.jpg')}
              style={{width: 167, height: 220,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/nime3.jpg')}
              style={{width: 167, height: 310,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/nime5.jpg')}
              style={{width: 167, height: 310,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/gigachad.jpg')}
              style={{width: 167, height: 160,margin: 10,borderRadius: 10}} />
              </View> 
              
              <View>
              <Image 
              source={require('../../asset/gambar_awal/beluga.jpg')}
              style={{width: 167, height: 310,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/nime2.jpg')}
              style={{width: 167, height: 310,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/nime4.jpg')}
              style={{width: 167, height: 310,margin: 10,borderRadius: 10}} />
              <Image 
              source={require('../../asset/gambar_awal/nime6.jpg')}
              style={{width: 167, height: 310,margin: 10,borderRadius: 10}} />
              </View>
              </View>
          </ScrollView>


        </View>
      

    );
  };
  
  const styles = StyleSheet.create({
    mainBox: {
      width: 80,
      height: 100,
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 5,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconMain: {
      width: 40,
      height: 40
    },
    textIconMain: {
      fontFamily: 'Roboto'
    }
  });
  
export default profile_akun;
