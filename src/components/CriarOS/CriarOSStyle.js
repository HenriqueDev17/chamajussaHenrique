import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
  },

  scroll: {
    paddingHorizontal: 14,
    paddingTop: 5,
    paddingBottom: 30,
  },

  tituloPagina: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 18,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,

    elevation: 3,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    marginBottom: 8,
  },

  input: {
    height: 35,
    backgroundColor: '#f1f2f3',
    borderWidth: 1,
    borderColor: '#dedfe1',
    borderRadius: 5,

    paddingHorizontal: 12,
    marginBottom: 9,

    fontSize: 12,
    color: '#222',
  },

  textArea: {
    height: 88,
    paddingTop: 10,
  },

  botao: {
    height: 38,
    backgroundColor: '#08b981',
    borderRadius: 7,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 13,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 3,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;