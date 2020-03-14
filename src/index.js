import React from 'react';
import {
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes />
  </>
);

export default App;
