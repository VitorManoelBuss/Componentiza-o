import React from 'react';
import { View } from 'react-native';

import Topo from './Componentes/Topo';
import Conteudo from './Componentes/Conteudo';

export default function App() {
  return (
    <View>
      <Topo />
      <Conteudo />
    </View>
  );
}
