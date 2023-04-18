import { StyleSheet } from 'react-native';

const estilosConteudo = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    width:'100vw',
    height:'20vw'
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
  },
  img: {
    width: '30vw',
    height: '30vw',
    marginBottom: 10,
  }
});

export default estilosConteudo;
