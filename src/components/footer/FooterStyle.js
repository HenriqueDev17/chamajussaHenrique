import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    height: 82,
    width: '100%',
    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',

    paddingHorizontal: 10,
    paddingBottom: 5,
  },

  footerItem: {
    flex: 1,
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    height: 34,
    width: 34,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 2,
  },

  // um único tamanho de ícone pra todos ficarem alinhados igual no print
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },

  label: {
    fontSize: 14,
    color: '#777777',
    fontWeight: '600',
    textAlign: 'center',
  },

  activeLabel: {
    fontSize: 14,
    color: '#008BB8',
    fontWeight: '600',
    textAlign: 'center',
  },
});