import React, { useState, useContext } from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TextContext from '../context/TestContext';

const CreateScreen = ({navigation})=>{
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const {addBlog} = useContext(TextContext);
    return (
        <View>
            <Text>Title</Text>
            <TextInput style={styles.input}
                value={title} 
                onChangeText={text => setTitle(text)}
            />
            <Text>Content</Text>
            <TextInput style={styles.input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button title="Add" onPress={()=>{navigation.goBack();addBlog(title,content)}} />
        </View>
    );
    };

    const styles= StyleSheet.create({
        input:{
            borderColor:'black',
            borderWidth:1,
            marginHorizontal:10,

        }
    });

    export default CreateScreen;