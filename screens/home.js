import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Home({ navigation }){

    const pressHandler = () => {
        navigation.push('AR');
    }
// 
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button title='Go to AR' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});