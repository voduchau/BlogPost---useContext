/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './src/screens/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ShowDetailBlog from './src/screens/ShowDetailBlog';
import CreateScreen from './src/screens/CreateScreen';
const Stack = createStackNavigator();

const App = ({navigation})=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="indexScreen" component={index} options={{
            // headerTitle: props => <AntDesign name="delete" size={30} color="#900" />,
            // headerRight: () => (
            //   <TouchableOpacity onPress={()=>navigation.navigate('CreateScreen')}>
            //     <AntDesign name="plus" size={30} color="gray" />
            //   </TouchableOpacity>
              
            // ),
        }} />
        <Stack.Screen name="ShowDetailBlog" component={ShowDetailBlog} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
