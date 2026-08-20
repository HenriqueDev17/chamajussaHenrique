import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import InfoOS from './src/components/infoOS/infoOS';
import CriarOS from './src/components/CriarOS/CriarOS';

function App() {
  const [telaAtual, setTelaAtual] = useState('criarOS');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        {/* <CriarOS telaAtual={telaAtual} onTrocarTela={setTelaAtual} /> */}

        <InfoOS telaAtual={telaAtual} onTrocarTela={setTelaAtual} />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;