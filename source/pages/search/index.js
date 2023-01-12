import React, {onPress} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Button, StyleSheet, Image, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import ikon1 from '../../asset/gambar_awal/beluga.jpg'


const search_akun = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
       <View>
          <Text style={{
            fontSize: 50,
            fontWeight: 'bold',
            margin: 4,
            pading: 10
         }}>
              search
            </Text>

            <Searchbar
             placeholder="Search all photo"
             onChangeText={onChangeSearch}
             value={searchQuery}
             icon={null}
          />

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
  
export default search_akun;
