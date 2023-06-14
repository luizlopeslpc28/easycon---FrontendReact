import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import {useNavigation} from '@react-navigation/native'

export default function RecuperarSenha(){

    const navigation = useNavigation();

    function recuperar(){
        alert('Uma nova senha foi enviada ao seu e-mail cadastrado');
        navigation.navigate('Login')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Senha</Text>

            <View style={styles.inputArea}>
                <Text style={styles.inputText}>E-mail:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="name@example.com"
                />
            </View>

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={recuperar}>
                    <Text style={styles.btnText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#131549'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFF',
        padding: 30,
        marginTop: 230
    },
    inputArea:{
        padding: 60
    },
    inputText:{
        color: '#FFF',
        fontSize: 18
    },
    input: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        padding: 7,
        paddingTop: 5,
        borderRadius: 8,
        marginTop: 10
    },
    btnArea:{
        width: '50%',
        height: '5%'
    },
    btn:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff',
        borderRadius: 10
    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFF"
    }
})