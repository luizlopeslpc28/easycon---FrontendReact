import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import moment from 'moment';
import { Picker } from "@react-native-community/picker";
import { useNavigation } from "@react-navigation/native";

class AbrirChamado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartamento: '101',
      apts: [
        { key: 1, apartamento: '101', numero: 101 },
        { key: 2, apartamento: '102', numero: 102 },
        { key: 3, apartamento: '201', numero: 201 },
        { key: 4, apartamento: '202', numero: 202 },
        { key: 5, apartamento: '204', numero: 204 },
        { key: 6, apartamento: '301', numero: 301 },
        { key: 7, apartamento: '302', numero: 302 }
      ],
      bloco: 1,
      ocorrencia: 1,
      local: '',
      descricao: '',
      dataAbertura: '',
      status: ''
    };
  }

  handleEnviar = () => {
    const { apartamento, bloco, ocorrencia, local, descricao, dataAbertura, status } = this.state;
    console.log('apartamento:', apartamento);
    console.log('bloco:', bloco);
    console.log('ocorrencia:', ocorrencia);
    console.log('local:', local);
    console.log('descricao:', descricao);
    console.log('dataAbertura:', dataAbertura);
    console.log('status', status);

    this.setState({ dataAbertura: moment().format('YYYY-MM-DD HH:mm:ss') });

    fetch('http://localhost:8080/chamados/chamados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apartamento: apartamento,
        bloco: bloco,
        ocorrencia: ocorrencia,
        local: local,
        descricao: descricao,
        dataAbertura: moment(dataAbertura, 'DD-MM-YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
        status: status,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert(data.mensagem);
        } else {
          alert(data.mensagem);
          this.props.navigation.navigate('Menu');
        }
      })
      .catch(error => {
        console.error('Erro durante o envio do chamado:', error);
        alert('Erro durante o envio do chamado. Por favor, tente novamente mais tarde.');
      });
  };

  render() {
    let aptsItem = this.state.apts.map((v) => {
      return <Picker.Item key={v.key} value={v.apartamento} label={v.apartamento} />;
    });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Abrir chamado</Text>

          <View style={styles.textArea}>
            <Text style={styles.text}>Local:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ local: text })}
            />

            <Text style={styles.text}>Apartamento:</Text>
            <Picker
              selectedValue={this.state.apartamento}
              onValueChange={(itemValue) => this.setState({ apartamento: itemValue })}
              style={styles.picker}
            >
              {aptsItem}
            </Picker>

            <Text style={styles.text}>Bloco:</Text>
            <Picker
              selectedValue={this.state.bloco}
              onValueChange={(itemValue) => this.setState({ bloco: itemValue })}
              style={styles.picker}
            >
              <Picker.Item key={1} value={'A'} label="A" />
              <Picker.Item key={2} value={'B'} label="B" />
              <Picker.Item key={3} value={'C'} label="C" />
            </Picker>

            <Text style={styles.text}>Ocorrência:</Text>
            <Picker
              selectedValue={this.state.ocorrencia}
              onValueChange={(itemValue) => this.setState({ ocorrencia: itemValue })}
              style={styles.picker}
            >
              <Picker.Item key={1} value={'Lâmpada queimada'} label="Lâmpada queimada" />
              <Picker.Item key={2} value={'Piso Molhado'} label="Piso Molhado" />
              <Picker.Item key={3} value={'Dejetos de pet'} label="Dejetos de pet" />
            </Picker>

            <Text style={styles.text}>Anexo</Text>

            <Text style={styles.text}>Descrição</Text>
            <TextInput
              style={styles.inputDescricao}
              multiline
              numberOfLines={4}
              onChangeText={text => this.setState({ descricao: text })}
            />

            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ dataAbertura: text })}
              value={this.state.dataAbertura}
              placeholder="Digite a data de abertura"
              keyboardType="numeric"
            />

            <Text style={styles.text}>Status:</Text>
            <Picker
              selectedValue={this.state.status}
              onValueChange={(itemValue) => this.setState({ status: itemValue })}
              style={styles.picker}
            >
              <Picker.Item key={1} value="Aberto" label="Aberto" />
              <Picker.Item key={2} value="Em andamento" label="Em andamento" />
              <Picker.Item key={3} value="Fechado" label="Fechado" />
            </Picker>

            <Enviar handleEnviar={this.handleEnviar} />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131549',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
    padding: 30
  },
  textArea: {
    padding: 20
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10
  },
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#FFF',
    padding: 7,
    paddingTop: 5,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  inputDescricao: {
    height: 120,
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
  },
  picker: {
    fontSize: 18,
    height: 40,
    width: 150,
    borderRadius: 8,
    padding: 7
  },
  btnArea: {
    alignItems: 'center',
    marginTop: 20
  },
  btn: {
    flex: 1,
    width: 100,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 7
  }
});

const Enviar = ({ handleEnviar }) => {
  return (
    <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn} onPress={handleEnviar}>
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AbrirChamado;
