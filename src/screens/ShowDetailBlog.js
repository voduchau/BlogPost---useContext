import React, { useContext } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TestContext from '../context/TestContext';
const ShowDetailBlog = ({navigation,route}) => {
    console.log(route,'xxx');
    const {data} = useContext(TestContext);
    const blogPost = data.find((item)=>item.id===route.params.id);
    console.log(blogPost,'xx');
    return (
        <View>
            <Text style={styles.textStyle}>
                {blogPost.title} - {blogPost.id}
            </Text>
        </View>
    );
};
const styles= StyleSheet.create({
    viewStyle:{

    },
    textStyle:{
        fontSize:20,
    }
})

export default ShowDetailBlog;