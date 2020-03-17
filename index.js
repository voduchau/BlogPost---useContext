/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry, View,Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TestProvider} from './src/context/TestContext'; 
const index =()=>{
    return (
    <TestProvider>
      <App />
    </TestProvider>
    )
}

AppRegistry.registerComponent(appName, () => index);
