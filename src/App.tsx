import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../patch-tvos-types.d';
import Navigation from './navigation';

const App: React.FC = () => {
  return <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>;
};

export default App;
