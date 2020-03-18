import React,{useContext,useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    FlatList
  } from 'react-native';
import TestContext from '../context/TestContext';
import Cpn01 from '../components/Cpn01';
import BlogPostDetail from '../components/BlogPostDetail';
import AntDesign from 'react-native-vector-icons/AntDesign';
  const index = ({navigation})=>{
      const {data,addBlog} = useContext(TestContext);
      console.log( navigation,'navigation...')
      
      useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('CreateScreen')}>
                          <AntDesign name="plus" size={30} color="gray" />
                        </TouchableOpacity>
                        
                      ),
          // title:'aaa'
        });
      }, [])
     
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
              {/* <Cpn01 /> */}
            </View>
      )
  };
  export default index;