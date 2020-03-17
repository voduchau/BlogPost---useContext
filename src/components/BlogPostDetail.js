import React, { useContext, useState } from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';
import TestContext from '../context/TestContext';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BlogPostDetail = ({navigation,item})=>{
    const {data,addBlog,deleteBlog} = useContext(TestContext);
    const [text,setText] = useState('');
    return (
        <View style={styles.viewStyle} >
            <TouchableOpacity onPress={()=>navigation.navigate('ShowDetailBlog',{id:item.id})}>
                <Text style={styles.titleStyle}  >{item.title}- {item.id}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>deleteBlog(item.id)}>
            <AntDesign name="delete" size={30} color="#900" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        fontSize:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        borderTopColor:'gray',
        borderTopWidth:2,
        alignItems:'center',
        paddingVertical:10,
    },
    titleStyle:{
        fontSize:20,
    }
})

export default BlogPostDetail;