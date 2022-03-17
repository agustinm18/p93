import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default class StopWatchScreen extends React.Component {
    render(){
        return (
            <View>
                <Text>Stopwatch Screen</Text>

                <TouchableOpacity style={styles.buttonStyles1} onPress={() =>
                        this.props.navigation.navigate("HomeScreen")
                    }>
                        <Text>To Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    buttonStyles1:{
        borderRadius: 30,
        width:200,
        height:30,
        textAlign: 'center',
        justifyContent:'center',
        backgroundColor:"lightpink",
        
    },
});