import React from 'react';
import { View, ScrollView } from 'react-native';

import Titulo from './Componentes/Titulo';
import Ator from './Componentes/Ator';
import Conteudo from './Componentes/Conteudo';

import estilos from './estilos';

export default function App() {
  return (
    <ScrollView>
    <View style={ estilos.container }>
      <Titulo />
      <Ator />
      <Conteudo />
    </View>
    </ScrollView>
  );
}