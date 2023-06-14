import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Chamados')}>
            <Card containerStyle={styles.cardContainer}>
              <Card.Title style={styles.cardTitle}>CHAMADOS</Card.Title>
              <Card.Divider />
              <View style={styles.imageContainer}>
                <Card.Image
                  style={styles.cardImage}
                  source={require('../../assets/bloco-de-anotacoes.png')}
                />
              </View>
              <Text style={styles.cardText}>
                Crie ou acompanhe seus chamados
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#131549',
  },
  cardContainer: {
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  cardImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  cardText: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#6e6e6e',
  },
});



  /*
  <Button
              icon={
                <Icon
                  name="airplane-outline"
                  type="ionicon"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="RESERVE AGORA"
              onPress={() => {alert('Reservado!')}}
            />
*/ 