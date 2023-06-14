import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Acessar from "./src/pages/Acessar";
import Login from "./src/pages/Login";
import Menu from "./src/pages/Menu";
import Cadastrar from "./src/pages/Cadastrar";
import RecuperarSenha from "./src/pages/RecuperarSenha";
import Chamados from "./src/pages/Chamados";
import AbrirChamado from "./src/pages/AbrirChamado";

const Stack =  createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name="Acessar" component={Acessar}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name="Login" component={Login}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="Menu" 
        component={Menu}
        options={{
          title: 'LE PARQUINHO CONDOMÍNIO'
        }}
        />

        <Stack.Screen 
        name="Cadastrar" component={Cadastrar}
        options={{
         
        }}
        />

        <Stack.Screen 
        name="RecuperarSenha" component={RecuperarSenha}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="Chamados" component={Chamados}
        options={{
          title: 'LE PARQUINHO CONDOMÍNIO'
        }}
        />

        <Stack.Screen 
        name="AbrirChamado" component={AbrirChamado}
        options={{
          title: 'LE PARQUINHO CONDOMÍNIO'
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
































