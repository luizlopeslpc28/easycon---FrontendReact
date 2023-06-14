import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

class Chamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visualizarChamado: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/chamados/lerChamados')
      .then((response) => response.json())
      .then((data) => {
        const { CHAMADOS } = data;
        this.setState({ visualizarChamado: CHAMADOS });
      })
      .catch((error) => {
        console.error('Erro ao obter os chamados: ', error);
      });
  }

  abrirChamado = () => {
    this.props.navigation.navigate('AbrirChamado');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.titleArea}>
            <Text style={styles.title}>Verificar chamados</Text>
          </View>
          <View style={styles.textArea}>
            <Text style={styles.text}>Número</Text>
            <Text style={styles.text}>Descrição</Text>
            <Text style={styles.text}>Data</Text>
            <Text style={styles.text}>Status</Text>
          </View>
          <FlatList
            data={this.state.visualizarChamado}
            keyExtractor={(item) => item.idChamados.toString()}
            renderItem={({ item }) => <Visualizar data={item} />}
          />
          <OpenTicketButton />
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
  titleArea: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  areaVisualizar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    height: 70,
    marginBottom: 15,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  visualizar: {
    color: '#222',
    fontSize: 18,
  },
  btnArea: {
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const OpenTicketButton = () => {
  const navigation = useNavigation();

  const abrirChamado = () => {
    navigation.navigate('AbrirChamado');
  };

  return (
    <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn} onPress={abrirChamado}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

class Visualizar extends Component {
  render() {
    return (
      <View style={styles.areaVisualizar}>
        <Text style={styles.visualizar}>{this.props.data.idChamados}</Text>
        <Text style={styles.visualizar}>{this.props.data.descricao}</Text>
        <Text style={styles.visualizar}>{this.props.data.dataAbertura}</Text>
        <Text style={styles.visualizar}>{this.props.data.status}</Text>
      </View>
    );
  }
}

export default Chamados;
