import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function RecuperarSenha() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function recuperar() {
    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: newPassword })
    };

    fetch(`http://localhost:8080/users/alterar/${email}`, requestOptions)
      .then(response => {
        if (response.ok) {
          alert('Senha do usuário atualizada com sucesso!');
          navigation.navigate('Login');
        } else {
          throw new Error('Erro ao atualizar a senha do usuário');
        }
      })
      .catch(error => {
        console.error('Erro ao atualizar a senha do usuário:', error);
        alert('Erro ao atualizar a senha do usuário. Por favor, tente novamente mais tarde.');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <View style={styles.inputArea}>
        <Text style={styles.inputText}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="name@example.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Nova Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Confirmar Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={recuperar}>
          <Text style={styles.btnText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#131549'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
    marginTop: 80,
    marginBottom: 30
  },
  inputArea: {
    marginBottom: 20,
    width: '80%',
  },
  inputText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
  },
  btnArea: {
    width: '50%',
    height: '5%',
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    borderRadius: 10
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FFF"
  }
});
