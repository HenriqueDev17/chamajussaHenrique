import React, { useState } from 'react';
import { View } from 'react-native';

import InfoOS from './src/components/infoOS/infoOS';
import CriarOS from './src/components/CriarOS/CriarOS';

function App() {
  const [telaAtual, setTelaAtual] = useState('criarOS');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        {/* <CriarOS telaAtual={telaAtual} onTrocarTela={setTelaAtual} /> */}

        <InfoOS telaAtual={telaAtual} onTrocarTela={setTelaAtual} />

      </View>
    </View>
  );
}

export default App;