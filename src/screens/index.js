import React,{useContext} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';
import TestContext from '../context/TestContext';
import Cpn01 from '../components/Cpn01';
import BlogPostDetail from '../components/BlogPostDetail';
import { FlatList } from 'react-native-gesture-handler';
  const index = ({navigation})=>{
      const {data,addBlog} = useContext(TestContext);
      return (
            <View>
              <Text style={{fontSize:30}}>
                  {data.length}
              </Text>
              <FlatList 
                data={data}
                keyExtractor={item=>item.title}
                renderItem={({item})=>{
                return <BlogPostDetail navigation={navigation} item={item} />
                }}
              />
              <Cpn01 />
            </View>
      )
  };
  index.navigationOptions = ({navigation}) => {
      return {
          headerRight: (
              <Text>aa</Text>
          )
      }
  }

  export default index;