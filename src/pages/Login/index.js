import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          setErrorMessage('Email ou senha incorreta');
        } else {
          setErrorMessage('');
          Alert.alert('Sucesso', data.mensagem);
          navigation.navigate('Menu');
        }
      })
      .catch(error => {
        console.error('Erro durante o login:', error);
        Alert.alert('Erro', 'Erro durante o login. Por favor, tente novamente mais tarde.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <View style={styles.areaText}>
        <Text style={styles.text}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o seu e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.text}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.textBtn}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { marginBottom: 13, marginTop: 13 }]}
          onPress={() => navigation.navigate('Cadastrar')}
        >
          <Text style={styles.textBtn}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { marginBottom: 13 }]}
          onPress={() => navigation.navigate('RecuperarSenha')}
        >
          <Text style={styles.textBtn}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#131549',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
    padding: 30,
    marginTop: 150,
  },
  areaText: {
    padding: 60,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    padding: 7,
    paddingTop: 5,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  btnArea: {
    height: 150,
    width: 200,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    height: 40,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
