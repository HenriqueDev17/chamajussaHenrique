import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './FooterStyle';

const COR_ATIVA = '#008BB8';
const COR_INATIVA = '#777777';

export default function Footer({ telaAtual, onTrocarTela }) {
  return (
    <View style={styles.footer}>

      {/* Minhas OS */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onTrocarTela('minhasOS')}
      >
        <View style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              { tintColor: telaAtual === 'minhasOS' ? COR_ATIVA : COR_INATIVA },
            ]}
            source={require('../../../assets/prancheta.png')}
          />
        </View>
        <Text style={telaAtual === 'minhasOS' ? styles.activeLabel : styles.label}>
          Minhas OS
        </Text>
      </TouchableOpacity>

      {/* Criar OS */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onTrocarTela('criarOS')}
      >
        <View style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              { tintColor: telaAtual === 'criarOS' ? COR_ATIVA : COR_INATIVA },
            ]}
            source={require('../../../assets/mais.png')}
          />
        </View>
        <Text style={telaAtual === 'criarOS' ? styles.activeLabel : styles.label}>
          Criar OS
        </Text>
      </TouchableOpacity>

      {/* Notificações */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onTrocarTela('notificacoes')}
      >
        <View style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              { tintColor: telaAtual === 'notificacoes' ? COR_ATIVA : COR_INATIVA },
            ]}
            source={require('../../../assets/notificacoes.png')}
          />
        </View>
        <Text style={telaAtual === 'notificacoes' ? styles.activeLabel : styles.label}>
          Notificações
        </Text>
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => onTrocarTela('perfil')}
      >
        <View style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              { tintColor: telaAtual === 'perfil' ? COR_ATIVA : COR_INATIVA },
            ]}
            source={require('../../../assets/usuario.png')}
          />
        </View>
        <Text style={telaAtual === 'perfil' ? styles.activeLabel : styles.label}>
          Perfil
        </Text>
      </TouchableOpacity>

    </View>
  );
}