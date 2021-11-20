import React from 'react';
import Reactotron from 'reactotron-react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Rotas from './src/Rotas';

Reactotron.configure().useReactNative().connect();

export default function App() {
  return (
      <Rotas />
  );
};