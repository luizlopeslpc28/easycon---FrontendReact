import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements';
import { Picker } from "@react-native-community/picker";
import { useNavigation } from "@react-navigation/native";

const Cadastrar = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [bloco, setBloco] = useState("");
  const [checked, setChecked] = useState(false);

  const selecinado = () => {
    setChecked(!checked);
  };

  const navigation = useNavigation();

  const handleCadastro = async () => {
    try {
      const response = await fetch("http://localhost:8080/users/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          cpf: cpf,
          apartamento: apartamento,
          bloco: bloco,
        }),
      });

      const data = await response.json();

      if (data.erro) {
        console.error(data.mensagem);
        // Display an error message to the user
      } else {
        // Registration successful, navigate to the login screen
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      // Display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO</Text>

      <View style={styles.textArea}>
        <Text style={styles.text}>E-mail:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.text}>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.text}>CPF:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
        />

        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Text style={styles.text}>Apartamento:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setApartamento(text)}
        />

        <Text style={styles.text}>Bloco:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBloco(text)}
        />
        

        <CheckBox
          style={styles.CheckBox}
          title="Concordo com os termos de uso"
          checked={checked}
          onPress={selecinado}
        />

        <TouchableOpacity style={styles.btn} onPress={handleCadastro}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#131549',
    padding: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20,
  },
  textArea: {
    alignItems: 'flex-start'
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 7
  },
  areaPicker: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20
  },
  CheckBox: {
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    height: 50,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFF"
  }
});

export default Cadastrar;
