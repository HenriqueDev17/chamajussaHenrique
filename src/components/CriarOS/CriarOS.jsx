import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './CriarOSStyle';
import Footer from '../footer/Footer';

const CriarOS = ({ telaAtual, onTrocarTela }) => {
  const [titulo, setTitulo] = useState('');
  const [maquina, setMaquina] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const abrirOrdem = () => {
    console.log('Ordem de serviço criada!');

    console.log({
      titulo,
      maquina,
      local,
      descricao,
      imagem,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.tituloPagina}>
          Criar ordem de serviço
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>
            Título do problema *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Vazamento da pia"
            placeholderTextColor="#999"
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={styles.label}>
            Máquina / Equipamento *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Máquina de lavar"
            placeholderTextColor="#999"
            value={maquina}
            onChangeText={setMaquina}
          />

          <Text style={styles.label}>
            Local / Setor *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Cozinha"
            placeholderTextColor="#999"
            value={local}
            onChangeText={setLocal}
          />

          <Text style={styles.label}>
            Descrição do problema *
          </Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descreva o problema"
            placeholderTextColor="#999"
            value={descricao}
            onChangeText={setDescricao}
            multiline={true}
            textAlignVertical="top"
          />

          <Text style={styles.label}>
            Imagem / Foto do problema *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Insira imagem"
            placeholderTextColor="#999"
            value={imagem}
            onChangeText={setImagem}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={abrirOrdem}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>
              Abrir Ordem de Serviço
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer telaAtual={telaAtual} onTrocarTela={onTrocarTela} />
    </View>
  );
};

export default CriarOS;