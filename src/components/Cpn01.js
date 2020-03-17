import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import TestContext from '../context/TestContext';

const Cpn01 = ()=>{
    const {data,addBlog} = useContext(TestContext);
    console.log(data,'data');
    return (
        <View>
            <Button title='add a blog post' onPress={()=>addBlog()} />
        </View>
    )
}

export default Cpn01;