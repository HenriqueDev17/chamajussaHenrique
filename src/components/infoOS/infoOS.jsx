import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { styles } from './infoStyleOS';
import Footer from '../footer/Footer';

const InfoOS = ({ telaAtual, onTrocarTela }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.pageTitle}>
          Detalhes da OS-1001
        </Text>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.card}>

            <Text style={styles.osTitle}>
              Vazamento hidráulico
            </Text>

            <Text style={styles.date}>
              Criada em 17/06/2026, 11:29:58
            </Text>

            {/* MÁQUINA / EQUIPAMENTO */}
            <View style={styles.infoRow}>
              <View style={styles.iconBox}>
                <Text style={{ fontSize: 18 }}>
                  <Image style={styles} source={require('../../../assets/chave.png')} />
                </Text>
              </View>

              <View style={styles.infoContent}>
                <Text style={styles.label}>
                  Máquina / Equipamento
                </Text>

                <Text style={styles.value}>
                  Tubulação/Sifão da Pia
                </Text>
              </View>
            </View>

            {/* LOCAL / SETOR */}
            <View style={styles.infoRow}>
              <View style={styles.iconBox}>
                <Text style={{ fontSize: 18 }}>
                  <Image style={styles} source={require('../../../assets/local.png')} />
                </Text>
              </View>

              <View style={styles.infoContent}>
                <Text style={styles.label}>
                  Local / Setor
                </Text>

                <Text style={styles.value}>
                  Banheiro Masculino -
                </Text>

                <Text style={styles.value}>
                  Bloco B - 2º Andar
                </Text>
              </View>
            </View>

            {/* SOLICITANTE */}
            <View style={styles.infoRow}>
              <View style={styles.iconBox}>
                <Text style={{ fontSize: 18 }}>
                  <Image style={styles} source={require('../../../assets/usuarioVerde.png')} />
                </Text>
              </View>

              <View style={styles.infoContent}>
                <Text style={styles.label}>
                  Solicitante
                </Text>

                <Text style={styles.value}>
                  Késsia Milena
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* DESCRIÇÃO */}
            <Text style={styles.sectionTitle}>
              Descrição do Problema
            </Text>

            <Text style={styles.description}>
              Há um vazamento constante de água por baixo da pia do
              banheiro masculino do segundo andar do Bloco B. Está
              alagando o chão e causando risco de queda.
            </Text>

            {/* FOTO */}
            <Text style={styles.sectionTitle}>
              Foto do Problema
            </Text>

            <Image
              source={require('../../../assets/usuario.png')}
              style={styles.problemImage}
              resizeMode="cover"
            />

          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.7}
          >
            <Text style={styles.editButtonText}>
              Editar Solicitação
            </Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

      <Footer telaAtual={telaAtual} onTrocarTela={onTrocarTela} />
    </SafeAreaView>
  );
};

export default InfoOS;