import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import {useNavigation} from '@react-navigation/native'

export default function Acessar(){

    const navigation = useNavigation();

    return(
        <View style={styles.conatiner}>

        <Image
          source={require('../../assets/dasdsadas.png')}
          style={styles.img}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text 
            style={styles.btnTexto}
            onPress={() => navigation.navigate('Login')}
            >
            Acessar</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#131549' // cor 
    },
    img: {
      marginTop: 8,
      width:280,
      height: 300,
    },
    btnArea: {
      marginTop: 160,
      paddingTop: 10,
      height: 50,
      width: 180
    },
    btn: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1e90ff',
      height: 40,
      borderRadius: 10
    },
    btnTexto: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#FFF"
    }
  });