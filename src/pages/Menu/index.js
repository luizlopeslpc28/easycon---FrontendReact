import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export default function Menu(){

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Chamados')}>
                <Card>
                    <Card.Title>CHAMADOS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={require('../../assets/bloco-de-anotacoes.png')}
                    />
                    <Text style={{ marginBottom: 10, alignItems: 'center', justifyContent:'center' }}>
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
      backgroundColor: '#ecf0f1',
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